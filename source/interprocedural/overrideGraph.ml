(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open Pyre
open Ast
open Statement
module GlobalResolution = Analysis.GlobalResolution
module TypeEnvironment = Analysis.TypeEnvironment
module AstEnvironment = Analysis.AstEnvironment

(* Override graph in the ocaml heap, storing a mapping from a method to its direct overrides. *)
module Heap = struct
  type t = Reference.t list Reference.Map.t

  let empty = Reference.Map.empty

  let of_alist_exn = Reference.Map.of_alist_exn

  let fold graph ~init ~f =
    Reference.Map.fold graph ~init ~f:(fun ~key:member ~data:subtypes -> f ~member ~subtypes)


  let equal left right = Reference.Map.equal (List.equal Reference.equal) left right

  let pp formatter overrides =
    let pp_pair formatter (member, subtypes) =
      Format.fprintf
        formatter
        "@,%a -> %s"
        Reference.pp
        member
        (List.map ~f:Reference.show subtypes |> String.concat ~sep:", ")
    in
    let pp_pairs formatter = List.iter ~f:(pp_pair formatter) in
    Format.fprintf formatter "{@[<v 2>%a@]@,}" pp_pairs (Reference.Map.to_alist overrides)


  let show = Format.asprintf "%a" pp

  let from_source ~environment ~source =
    let resolution = TypeEnvironment.ReadOnly.global_resolution environment in
    if GlobalResolution.source_is_unit_test resolution ~source then
      Reference.Map.empty
    else
      let timer = Timer.start () in
      let class_method_overrides { Node.value = { Class.body; name = class_name; _ }; _ } =
        let get_method_overrides child_method =
          let method_name = Define.unqualified_name child_method in
          let ancestor =
            try
              GlobalResolution.overrides (Reference.show class_name) ~name:method_name ~resolution
            with
            | Analysis.ClassHierarchy.Untracked untracked_type ->
                Log.warning
                  "Found untracked type `%s` when looking for a parent of `%a.%s`. The method will \
                   be considered has having no parent, which could lead to false negatives."
                  untracked_type
                  Reference.pp
                  class_name
                  method_name;
                None
          in
          ancestor
          >>= fun ancestor ->
          let parent_annotation = Analysis.Annotated.Attribute.parent ancestor in
          let ancestor_parent =
            Type.Primitive parent_annotation
            |> Type.expression
            |> Expression.show
            |> Reference.create
          in
          (* This special case exists only for `type`. Our override lookup for a class C first looks
             at the regular MRO. If that fails, it looks for Type[C]'s MRO. However, when C is type,
             this causes a cycle to get registered. *)
          if Reference.equal ancestor_parent class_name then
            None
          else
            let method_name =
              if Define.is_property_setter child_method then
                method_name ^ Target.property_setter_suffix
              else
                method_name
            in
            Some (Reference.create ~prefix:ancestor_parent method_name, class_name)
        in
        let extract_define = function
          | { Node.value = Statement.Define define; _ } -> Some define
          | _ -> None
        in
        let overrides =
          body |> List.filter_map ~f:extract_define |> List.filter_map ~f:get_method_overrides
        in
        Statistics.performance
          ~randomly_log_every:1000
          ~always_log_time_threshold:1.0 (* Seconds *)
          ~name:"Overrides built"
          ~section:`DependencyGraph
          ~normals:["class", Reference.show class_name]
          ~timer
          ();
        overrides
      in
      let record_overrides map (ancestor_method, overriding_type) =
        let update_types = function
          | Some types -> overriding_type :: types
          | None -> [overriding_type]
        in
        Reference.Map.update map ancestor_method ~f:update_types
      in
      let record_overrides_list map relations = List.fold relations ~init:map ~f:record_overrides in
      Preprocessing.classes source
      |> List.map ~f:class_method_overrides
      |> List.fold ~init:Reference.Map.empty ~f:record_overrides_list
      |> Map.map ~f:(List.dedup_and_sort ~compare:Reference.compare)


  let skip_overrides ~to_skip overrides =
    Reference.Map.filter_keys ~f:(fun override -> not (Set.mem to_skip override)) overrides


  type cap_overrides_result = {
    overrides: t;
    skipped_overrides: Reference.t list;
  }

  (* If a method has too many overrides, ignore them. *)
  let cap_overrides ~maximum_overrides overrides =
    (* Keep the information of whether we're skipping overrides in a ref that we accumulate while we
       filter the map. *)
    let skipped_overrides = ref [] in
    let keep_override_edge ~key:member ~data:subtypes =
      let number_of_overrides = List.length subtypes in
      match maximum_overrides with
      | Some cap ->
          if number_of_overrides < cap then
            true
          else begin
            Log.info
              "Omitting overrides for `%s`, as it has %d overrides."
              (Reference.show member)
              number_of_overrides;
            skipped_overrides := member :: !skipped_overrides;
            false
          end
      | None ->
          if number_of_overrides > 50 then
            Log.warning
              "`%s` has %d overrides, this might slow down the analysis considerably."
              (Reference.show member)
              number_of_overrides;
          true
    in
    let overrides = Reference.Map.filteri overrides ~f:keep_override_edge in
    { overrides; skipped_overrides = !skipped_overrides }


  (* This can be used to cache the whole graph in shared memory. *)
  type serializable = Reference.t list Reference.Map.Tree.t

  let to_serializable = Reference.Map.to_tree

  let of_serializable = Reference.Map.of_tree
end

(* Override graph in the shared memory, a mapping from a method to its direct overrides. *)
module SharedMemory = struct
  module T =
    Memory.WithCache.Make
      (Analysis.SharedMemoryKeys.ReferenceKey)
      (struct
        type t = Reference.t list

        let prefix = Prefix.make ()

        let description = "overriding types"
      end)

  let add_overriding_types ~member ~subtypes = T.add member subtypes

  let get_overriding_types ~member = T.get member

  let overrides_exist member = T.mem member

  (* Records a heap override graph in shared memory. *)
  let from_heap overrides =
    let record_override_edge ~key:member ~data:subtypes = add_overriding_types ~member ~subtypes in
    Reference.Map.iteri overrides ~f:record_override_edge


  (* Remove an override graph from shared memory.
   * This must be called before storing another override graph. *)
  let cleanup overrides = overrides |> Reference.Map.keys |> T.KeySet.of_list |> T.remove_batch

  let expand_override_targets callees =
    let rec expand_and_gather expanded = function
      | (Target.Function _ | Target.Method _ | Target.Object _) as real -> real :: expanded
      | Target.Override _ as override ->
          let make_override at_type = Target.create_derived_override override ~at_type in
          let overrides =
            let member = Target.get_override_reference override in
            T.get member |> Option.value ~default:[] |> List.map ~f:make_override
          in
          Target.get_corresponding_method override
          :: List.fold overrides ~f:expand_and_gather ~init:expanded
    in
    List.fold callees ~init:[] ~f:expand_and_gather |> List.dedup_and_sort ~compare:Target.compare
end

let get_source ~environment qualifier =
  let ast_environment = TypeEnvironment.ReadOnly.ast_environment environment in
  AstEnvironment.ReadOnly.get_processed_source ast_environment qualifier


(* Compute the override graph, which maps overide_targets (parent methods which are overridden) to
   all concrete methods overriding them, and save it to shared memory. *)
let record_overrides_for_qualifiers
    ~scheduler
    ~environment
    ~skip_overrides
    ~maximum_overrides
    ~qualifiers
  =
  let overrides =
    let combine ~key:_ left right = List.rev_append left right in
    let build_overrides overrides qualifier =
      match get_source ~environment qualifier with
      | None -> overrides
      | Some source ->
          let new_overrides =
            Heap.from_source ~environment ~source |> Heap.skip_overrides ~to_skip:skip_overrides
          in
          Map.merge_skewed overrides new_overrides ~combine
    in
    Scheduler.map_reduce
      scheduler
      ~policy:(Scheduler.Policy.legacy_fixed_chunk_count ())
      ~initial:Heap.empty
      ~map:(fun _ qualifiers -> List.fold qualifiers ~init:Heap.empty ~f:build_overrides)
      ~reduce:(Map.merge_skewed ~combine)
      ~inputs:qualifiers
      ()
  in
  let ({ Heap.overrides; _ } as cap_override_result) =
    Heap.cap_overrides ~maximum_overrides overrides
  in
  let () = SharedMemory.from_heap overrides in
  cap_override_result