(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open Analysis

module Subscriptions = struct
  type t = Subscription.t String.Table.t

  let create () = String.Table.create ()

  let add ~name ~subscription subscriptions = Hashtbl.set subscriptions ~key:name ~data:subscription

  let get ~name subscriptions = Hashtbl.find subscriptions name

  let remove ~name subscriptions = Hashtbl.remove subscriptions name

  let all subscriptions = Hashtbl.data subscriptions
end

type t = {
  build_system: BuildSystem.t;
  multi_environment: MultiEnvironment.t;
  subscriptions: Subscriptions.t;
}

let create ?subscriptions ~build_system ~multi_environment () =
  {
    build_system;
    multi_environment;
    subscriptions = Option.value subscriptions ~default:(Subscriptions.create ());
  }


module StoredConfiguration = Memory.Serializer (struct
  type t = Configuration.Analysis.t

  module Serialized = struct
    type t = Configuration.Analysis.t

    let prefix = Prefix.make ()

    let description = "Configuration"
  end

  let serialize = Fn.id

  let deserialize = Fn.id
end)

let load_stored_configuration = StoredConfiguration.load

let load ~configuration ~build_system () =
  let multi_environment =
    EnvironmentControls.create configuration
    |> Analysis.ErrorsEnvironment.load
    |> MultiEnvironment.create
  in
  create ~build_system ~multi_environment ()


let store ~path ~configuration { multi_environment; build_system; _ } =
  Memory.SharedMemory.collect `aggressive;
  Analysis.MultiEnvironment.store multi_environment;
  StoredConfiguration.store configuration;
  BuildSystem.store build_system;
  Memory.save_shared_memory ~path:(PyrePath.absolute path) ~configuration
