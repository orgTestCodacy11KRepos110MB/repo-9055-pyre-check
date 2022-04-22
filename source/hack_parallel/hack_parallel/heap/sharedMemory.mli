(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(*****************************************************************************)
(* The heap shared across all the processes.
 *
 * The Heap is not exposed directly to the user (cf shared.mli),
 * because we don't want to mix values of different types. Instead, we want
 * to use a functor.
*)
(*****************************************************************************)

type config = {
  global_size      : int;
  heap_size        : int;
  dep_table_pow    : int;
  hash_table_pow   : int;
  shm_dirs         : string list;
  shm_min_avail    : int;
  log_level        : int;
}

type handle = private {
  h_fd: Unix.file_descr;
  h_global_size: int;
  h_heap_size: int;
}

exception Out_of_shared_memory
exception Hash_table_full
exception Dep_table_full
exception Heap_full
exception Sql_assertion_failure of int
exception C_assertion_failure of string

(*****************************************************************************)
(* Initializes the shared memory. Must be called before forking! *)
(*****************************************************************************)

val init: config -> handle

(*****************************************************************************)
(* Connect a slave to the shared heap *)
(*****************************************************************************)

val connect: handle -> unit

(*****************************************************************************)
(* The shared memory garbage collector. It must be called every time we
 * free data (cf hh_shared.c for the underlying C implementation).
*)
(*****************************************************************************)

val collect: [ `gentle | `aggressive | `always_TEST ] -> unit

(*****************************************************************************)
(* Must be called after the initialization of the hack server is over.
 * (cf serverInit.ml).
*)
(*****************************************************************************)

val init_done: unit -> unit

(*****************************************************************************)
(* Serializes the dependency table and writes it to a file *)
(*****************************************************************************)
val save_dep_table_sqlite: string -> string -> int

(*****************************************************************************)
(* Loads the dependency table by reading from a file *)
(*****************************************************************************)
val load_dep_table_sqlite: string -> bool -> int


(*****************************************************************************)
(* Serializes & loads the hash table directly into memory *)
(*****************************************************************************)

val save_table: string -> unit
val load_table: string -> unit

(*****************************************************************************)
(* Serializes the hash table to sqlite *)
(*****************************************************************************)

val save_table_sqlite: string -> int
val save_table_keys_sqlite: string -> string array -> int

(*****************************************************************************)
(* Loads the hash table by reading from a file *)
(*****************************************************************************)

val load_table_sqlite: string -> bool -> int

(*****************************************************************************)
(* Cleans up the artifacts generated by SQL *)
(*****************************************************************************)
val cleanup_sqlite: unit -> unit

(*****************************************************************************)
(* The size of the dynamically allocated shared memory section *)
(*****************************************************************************)
val heap_size : unit -> int

(*****************************************************************************)
(* Part of the heap not reachable from hashtable entries. *)
(*****************************************************************************)
val wasted_heap_size: unit -> int

(*****************************************************************************)
(* Stats of the statically sized hash / dep tables *)
(*****************************************************************************)

type table_stats = {
  nonempty_slots : int;
  used_slots : int;
  slots : int;
}

val dep_stats : unit -> table_stats

val hash_stats : unit -> table_stats

val is_heap_overflow: unit -> bool

(*****************************************************************************)
(* Cache invalidation. *)
(*****************************************************************************)

val invalidate_caches: unit -> unit

(* Size of value in GC heap *)
val value_size: Obj.t -> int

(*****************************************************************************)
(* The signatures of shared memory hashtables
 *
 * Use NoCache/WithCache if you want caching or not. If you do, bear in mind
 * that the cache must be maintained by the caller, so you will have to
 * invalidate the caches yourself.
*)
(*****************************************************************************)


(*****************************************************************************)
(* The interfaces for keys and values of shared memory tables *)
(*****************************************************************************)


module type KeyType = sig
  type t
  val to_string : t -> string
  val from_string : string -> t
  val compare : t -> t -> int
end

module type ValueType = sig
  type t
  val prefix: Prefix.t
  val description: string
end

(*****************************************************************************)
(* A shared memory table with no process-local caching of reads *)
(*****************************************************************************)
module NoCache : sig
  module type S = sig
    type key
    type value
    module KeySet : Set.S with type elt = key
    module KeyMap : MyMap.S with type key = key


    (* Add a value to the table. Safe for concurrent writes - the first
       writer wins, later values are discarded. *)
    val add              : key -> value -> unit

    (* Api to read and remove from the table *)
    val get              : key -> value option
    val get_exn          : key -> value
    val mem              : key -> bool
    val get_batch        : KeySet.t -> value option KeyMap.t
    val remove_batch     : KeySet.t -> unit

    (* Api to read and remove old data from the table, which lives in a separate
       hash map. Used in situations where we want to know what has changed, for
       example dependency-tracked tables. *)
    val get_old          : key -> value option
    val mem_old          : key -> bool
    val get_old_batch    : KeySet.t -> value option KeyMap.t
    val remove_old_batch : KeySet.t -> unit

    (* Move keys between the current view of the table and the old-values table *)
    val oldify_batch     : KeySet.t -> unit
    val revive_batch     : KeySet.t -> unit

    (* Api to allow batching up local changes before serializing them *)
    module LocalChanges : sig
      val has_local_changes : unit -> bool
      val push_stack : unit -> unit
      val pop_stack : unit -> unit
      val revert_batch : KeySet.t -> unit
      val commit_batch : KeySet.t -> unit
      val revert_all : unit -> unit
      val commit_all : unit -> unit
    end
  end


  module Make :
    functor (KeyType : KeyType) ->
    functor (Value : ValueType) ->
      S with type value = Value.t
              and type key = KeyType.t
              and module KeySet = Set.Make (KeyType)
              and module KeyMap = MyMap.Make (KeyType)
end

(*****************************************************************************)
(* A shared memory table with process-local caches of reads. We use the cache
 * to avoid paying the deserialization cost in duplicate reads within process.
 *)
(*****************************************************************************)
module WithCache : sig
  module type S = sig
    include NoCache.S
    val write_through : key -> value -> unit
    val get_no_cache: key -> value option
  end

  module Make :
    functor (KeyType : KeyType) ->
    functor (Value : ValueType) ->
      S with type value = Value.t
                and type key = KeyType.t
                and module KeySet = Set.Make (KeyType)
                and module KeyMap = MyMap.Make (KeyType)
end

module type CacheType = sig
  type key
  type value

  val add: key -> value -> unit
  val get: key -> value option
  val remove: key -> unit
  val clear: unit -> unit
  val get_size : unit -> int
end

module LocalCache :
  functor (KeyType : KeyType) ->
  functor (Value : ValueType) ->
    CacheType with type key = KeyType.t
               and type value = Value.t
