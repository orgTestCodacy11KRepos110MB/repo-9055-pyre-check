(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

type t =
  | Attach
  | NamedSource of string
  | ParametricSource of {
      source_name: string;
      subkind: string;
    }
  | Transform of {
      (* Invariant: concatenation of local @ global is non-empty. *)
      local: TaintTransforms.t;
      global: TaintTransforms.t;
      (* Invariant: not a transform. *)
      base: t;
    }
[@@deriving compare, eq, show]

val name : string

val ignore_kind_at_call : t -> bool

val apply_call : t -> t

module Set : sig
  include Stdlib.Set.S with type elt = t

  val pp : Format.formatter -> t -> unit

  val show : t -> string

  val to_sanitize_transform_set_exn : t -> SanitizeTransformSet.t

  val as_singleton : t -> elt option
end

module Map : sig
  include Stdlib.Map.S with type key = t

  val of_alist_exn : (key * 'a) list -> 'a t

  val to_alist : 'a t -> (key * 'a) list
end

val discard_subkind : t -> t

val discard_transforms : t -> t

val discard_sanitize_transforms : t -> t

val extract_sanitized_sources_from_transforms : SanitizeTransform.SourceSet.t -> Set.t

val to_sanitized_source_exn : t -> SanitizeTransform.Source.t

val from_sanitized_source : SanitizeTransform.Source.t -> t

val extract_sanitize_transforms : t -> SanitizeTransformSet.t

val get_named_transforms : t -> TaintTransform.t list

val contains_sanitize_transforms : t -> SanitizeTransformSet.t -> bool
