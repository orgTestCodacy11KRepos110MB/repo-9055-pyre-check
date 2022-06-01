(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open Pyre
module Target = Interprocedural.Target
module TypeEnvironment = Analysis.TypeEnvironment
module AstEnvironment = Analysis.AstEnvironment
module FetchCallables = Interprocedural.FetchCallables
module ClassHierarchyGraph = Interprocedural.ClassHierarchyGraph
module OverrideGraph = Interprocedural.OverrideGraph

module InitialCallablesSharedMemory = Memory.Serializer (struct
  type t = FetchCallables.t

  module Serialized = struct
    type t = FetchCallables.t

    let prefix = Prefix.make ()

    let description = "Initial callables to analyze"
  end

  let serialize = Fn.id

  let deserialize = Fn.id
end)

module OverrideGraphSharedMemory = Memory.Serializer (struct
  type t = OverrideGraph.Heap.cap_overrides_result

  module Serialized = struct
    type t = {
      overrides: OverrideGraph.Heap.serializable;
      skipped_overrides: Target.t list;
    }

    let prefix = Prefix.make ()

    let description = "Cached override graph"
  end

  let serialize { OverrideGraph.Heap.overrides; skipped_overrides } =
    { Serialized.overrides = OverrideGraph.Heap.to_serializable overrides; skipped_overrides }


  let deserialize { Serialized.overrides; skipped_overrides } =
    {
      OverrideGraph.Heap.overrides = OverrideGraph.Heap.of_serializable overrides;
      skipped_overrides;
    }
end)

module ClassHierarchyGraphSharedMemory = Memory.Serializer (struct
  type t = ClassHierarchyGraph.t

  module Serialized = struct
    type t = ClassHierarchyGraph.t

    let prefix = Prefix.make ()

    let description = "Class hierarchy graph"
  end

  let serialize = Fn.id

  let deserialize = Fn.id
end)

module Cache = struct
  type cached = { module_tracker: Analysis.ModuleTracker.t }

  type error =
    | InvalidByCodeChange
    | LoadError
    | NotFound
    | Disabled

  type t = {
    cache: (cached, error) Result.t;
    save_cache: bool;
    scheduler: Scheduler.t;
    configuration: Configuration.Analysis.t;
  }

  let get_save_directory ~configuration =
    PyrePath.create_relative
      ~root:(Configuration.Analysis.log_directory configuration)
      ~relative:".pysa_cache"


  let get_shared_memory_save_path ~configuration =
    PyrePath.append (get_save_directory ~configuration) ~element:"sharedmem"


  let exception_to_error ~error ~message ~f =
    try f () with
    | exception_ ->
        Log.error "Error %s:\n%s" message (Exn.to_string exception_);
        Error error


  let ignore_result (_ : ('a, 'b) result) = ()

  let initialize_shared_memory ~configuration =
    let path = get_shared_memory_save_path ~configuration in
    if not (PyrePath.file_exists path) then (
      Log.warning "Could not find a cached state.";
      Error NotFound)
    else
      exception_to_error ~error:LoadError ~message:"loading cached state" ~f:(fun () ->
          let _ = Memory.get_heap_handle configuration in
          Memory.load_shared_memory ~path:(PyrePath.absolute path) ~configuration;
          Log.warning
            "Cached state successfully loaded from `%s`."
            (PyrePath.absolute (get_save_directory ~configuration));
          Ok ())


  let load_module_tracker ~scheduler ~configuration =
    let open Result in
    Log.info "Determining if source files have changed since cache was created.";
    exception_to_error ~error:LoadError ~message:"loading module tracker from cache" ~f:(fun () ->
        Ok (Analysis.ModuleTracker.Serializer.from_stored_layouts ~configuration ()))
    >>= fun old_module_tracker ->
    let new_module_tracker = Analysis.ModuleTracker.create configuration in
    let changed_paths =
      let is_pysa_model path = String.is_suffix ~suffix:".pysa" (PyrePath.get_suffix_path path) in
      let is_taint_config path = String.is_suffix ~suffix:"taint.config" (PyrePath.absolute path) in
      ChangedPaths.compute_locally_changed_paths
        ~scheduler
        ~configuration
        ~old_module_tracker
        ~new_module_tracker
      |> List.map ~f:ArtifactPath.raw
      |> List.filter ~f:(fun path -> not (is_pysa_model path || is_taint_config path))
    in
    match changed_paths with
    | [] -> Ok new_module_tracker
    | _ ->
        Log.warning "Changes to source files detected, ignoring existing cache.";
        Error InvalidByCodeChange


  let load ~scheduler ~configuration ~enabled =
    if not enabled then
      { cache = Error Disabled; save_cache = false; scheduler; configuration }
    else
      let open Result in
      let module_tracker =
        initialize_shared_memory ~configuration
        >>= fun () -> load_module_tracker ~scheduler ~configuration
      in
      let cache =
        match module_tracker with
        | Ok module_tracker -> Ok { module_tracker }
        | Error error ->
            Memory.reset_shared_memory ();
            Error error
      in
      { cache; save_cache = true; scheduler; configuration }


  let load_type_environment ~module_tracker =
    exception_to_error ~error:LoadError ~message:"loading type environment from cache" ~f:(fun () ->
        let ast_environment = AstEnvironment.load module_tracker in
        let environment =
          Analysis.AnnotatedGlobalEnvironment.create ast_environment |> TypeEnvironment.create
        in
        Analysis.SharedMemoryKeys.DependencyKey.Registry.load ();
        Log.info "Loaded cached type environment.";
        Ok environment)


  let save_type_environment ~scheduler ~configuration ~environment =
    exception_to_error ~error:() ~message:"saving type environment to cache" ~f:(fun () ->
        Memory.SharedMemory.collect `aggressive;
        let module_tracker = TypeEnvironment.module_tracker environment in
        let ast_environment = TypeEnvironment.ast_environment environment in
        ChangedPaths.save_current_paths ~scheduler ~configuration ~module_tracker;
        Analysis.ModuleTracker.Serializer.store_layouts module_tracker;
        AstEnvironment.store ast_environment;
        Analysis.SharedMemoryKeys.DependencyKey.Registry.store ();
        Log.info "Saved type environment to cache shared memory.";
        Ok ())


  let type_environment { cache; save_cache; scheduler; configuration } f =
    let type_environment =
      match cache with
      | Ok { module_tracker } -> load_type_environment ~module_tracker |> Result.ok
      | _ -> None
    in
    match type_environment with
    | Some type_environment -> type_environment
    | None ->
        let environment = f () in
        if save_cache then
          save_type_environment ~scheduler ~configuration ~environment |> ignore_result;
        environment


  let load_initial_callables () =
    exception_to_error
      ~error:LoadError
      ~message:"loading initial callables from cache"
      ~f:(fun () ->
        let initial_callables = InitialCallablesSharedMemory.load () in
        Log.info "Loaded cached initial callables.";
        Ok initial_callables)


  let ensure_save_directory_exists ~configuration =
    let directory = PyrePath.absolute (get_save_directory ~configuration) in
    try Core.Unix.mkdir directory with
    (* [mkdir] on MacOSX returns [EISDIR] instead of [EEXIST] if the directory already exists. *)
    | Core.Unix.Unix_error ((EEXIST | EISDIR), _, _) -> ()
    | e -> raise e


  let save_shared_memory ~configuration =
    exception_to_error ~error:() ~message:"saving cached state to file" ~f:(fun () ->
        let path = get_shared_memory_save_path ~configuration in
        Log.info "Saving shared memory state to cache file...";
        ensure_save_directory_exists ~configuration;
        Memory.save_shared_memory ~path:(PyrePath.absolute path) ~configuration;
        Log.info "Saved shared memory state to cache file: `%s`" (PyrePath.absolute path);
        Ok ())


  let save_initial_callables ~configuration ~initial_callables =
    exception_to_error ~error:() ~message:"saving initial callables to cache" ~f:(fun () ->
        Memory.SharedMemory.collect `aggressive;
        InitialCallablesSharedMemory.store initial_callables;
        Log.info "Saved initial callables to cache shared memory.";
        (* Shared memory is saved to file after caching the callables to shared memory. The
           remaining overrides and callgraph to be cached don't use shared memory and are saved as
           serialized sexps to separate files. *)
        save_shared_memory ~configuration)


  let initial_callables { cache; save_cache; configuration; _ } f =
    let initial_callables =
      match cache with
      | Ok _ -> load_initial_callables () |> Result.ok
      | _ -> None
    in
    match initial_callables with
    | Some initial_callables -> initial_callables
    | None ->
        let callables = f () in
        if save_cache then
          save_initial_callables ~configuration ~initial_callables:callables |> ignore_result;
        callables


  let load_overrides () =
    exception_to_error ~error:LoadError ~message:"loading overrides from cache" ~f:(fun () ->
        let override_graph = OverrideGraphSharedMemory.load () in
        Log.info "Loaded overrides.";
        Ok override_graph)


  let save_overrides ~configuration ~overrides =
    exception_to_error ~error:() ~message:"saving overrides to cache" ~f:(fun () ->
        OverrideGraphSharedMemory.store overrides;
        Log.info "Saved overrides to cache shared memory.";
        (* Now that we have cached everything in shared memory, save it to a file. *)
        Memory.SharedMemory.collect `aggressive;
        save_shared_memory ~configuration)


  let override_graph { cache; save_cache; configuration; _ } f =
    let overrides =
      match cache with
      | Ok _ -> load_overrides () |> Result.ok
      | _ -> None
    in
    match overrides with
    | Some overrides -> overrides
    | None ->
        let overrides = f () in
        if save_cache then save_overrides ~configuration ~overrides |> ignore_result;
        overrides


  let load_class_hierarchy_graph () =
    exception_to_error
      ~error:LoadError
      ~message:"loading class hierarchy graph from cache"
      ~f:(fun () ->
        let class_hierarchy_graph = ClassHierarchyGraphSharedMemory.load () in
        Log.info "Loaded class hierarchy graph.";
        Ok class_hierarchy_graph)


  let save_class_hierarchy_graph ~class_hierarchy_graph =
    exception_to_error ~error:() ~message:"saving class hierarchy graph to cache" ~f:(fun () ->
        Memory.SharedMemory.collect `aggressive;
        ClassHierarchyGraphSharedMemory.store class_hierarchy_graph;
        Log.info "Saved class hierarchy graph to cache shared memory.";
        Ok ())


  let class_hierarchy_graph { cache; save_cache; _ } f =
    let class_hierarchy_graph =
      match cache with
      | Ok _ -> load_class_hierarchy_graph () |> Result.ok
      | _ -> None
    in
    match class_hierarchy_graph with
    | Some class_hierarchy_graph -> class_hierarchy_graph
    | None ->
        let class_hierarchy_graph = f () in
        if save_cache then
          save_class_hierarchy_graph ~class_hierarchy_graph |> ignore_result;
        class_hierarchy_graph
end
