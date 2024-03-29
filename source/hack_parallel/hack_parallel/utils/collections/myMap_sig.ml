(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(* TODO(T132410158) Add a module-level doc comment. *)


module type S = sig
  include Map.S

  val add: ?combine: ('a -> 'a -> 'a) -> key -> 'a -> 'a t -> 'a t
  val get: key -> 'a t -> 'a option
  val find_unsafe: key -> 'a t -> 'a
  val union: ?combine:(key -> 'a -> 'a -> 'a option) -> 'a t -> 'a t -> 'a t
  val compare: 'a t -> 'a t -> int
  val equal: 'a t -> 'a t -> bool
  val keys: 'a t -> key list
  val values: 'a t -> 'a list
  val elements: 'a t -> (key * 'a) list
  val map_env: ('c -> 'a -> 'c * 'b) -> 'c -> 'a t -> 'c * 'b t
  val choose: 'a t -> (key * 'a) option
  val from_keys: key list -> (key -> 'a) -> 'a t
end
