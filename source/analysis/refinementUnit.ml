(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open Ast
open Annotation

type t = {
  base: Annotation.t option;
  attributes: t Identifier.Map.Tree.t;
}
[@@deriving eq]

let top =
  { base = Some (Annotation.create_mutable Type.Top); attributes = Identifier.Map.Tree.empty }


let rec pp format { base; attributes } =
  let attribute_map_entry (identifier, refinement_unit) =
    Format.asprintf "%a -> %a" Identifier.pp identifier pp refinement_unit
  in
  (match base with
  | Some base -> Format.fprintf format "[Base: %a; " Annotation.pp base
  | None -> Format.fprintf format "[Base: (); ");
  Map.Tree.to_alist attributes
  |> List.map ~f:attribute_map_entry
  |> String.concat ~sep:", "
  |> Format.fprintf format "Attributes: [%s]]"


let show = Format.asprintf "%a" pp

let find = Identifier.Map.Tree.find

let base { base; _ } = base

let create ?base () = { base; attributes = Identifier.Map.Tree.empty }

let set_base refinement_unit ~base = { refinement_unit with base = Some base }

let add_attribute_refinement refinement_unit ~reference ~base =
  let rec add_attribute_refinement ({ attributes; _ } as refinement_unit) ~base ~identifiers =
    match identifiers with
    | [] -> { refinement_unit with base = Some base }
    | identifier :: identifiers ->
        {
          refinement_unit with
          attributes =
            attributes
            |> Identifier.Map.Tree.set
                 ~key:identifier
                 ~data:
                   (find attributes identifier
                   |> Option.value ~default:(create ())
                   |> add_attribute_refinement ~base ~identifiers);
        }
  in
  add_attribute_refinement refinement_unit ~base ~identifiers:(reference |> Reference.as_list)


let annotation refinement_unit ~reference =
  let rec annotation { base; attributes } ~identifiers =
    match identifiers with
    | [] -> base
    | identifier :: identifiers -> (
        match find attributes identifier with
        | Some refinement_unit -> annotation refinement_unit ~identifiers
        | None -> None)
  in
  annotation refinement_unit ~identifiers:(reference |> Reference.as_list)


let rec less_or_equal ~global_resolution left right =
  let annotation_less_or_equal left_base right_base =
    match left_base, right_base with
    | Some left, Some right ->
        Annotation.less_or_equal
          ~type_less_or_equal:(GlobalResolution.less_or_equal global_resolution)
          ~left
          ~right
    | None, None -> true (* intermediate refinement units don't require computation *)
    | _ -> false
  in
  let attributes_less_or_equal left_attributes right_attributes =
    let compare_refinement_units ~key:_ ~data sofar =
      match data with
      | `Both (left, right) -> sofar && less_or_equal ~global_resolution left right
      (* only compare refinement units which possess the same attributes *)
      | `Left _
      | `Right _ ->
          false
    in
    Identifier.Map.Tree.fold2
      left_attributes
      right_attributes
      ~init:true
      ~f:compare_refinement_units
  in
  annotation_less_or_equal left.base right.base
  && attributes_less_or_equal left.attributes right.attributes


let join ~global_resolution left right =
  if equal left top || equal right top then
    top
  else
    let valid_join left_base right_base =
      match left_base, right_base with
      | Some left, Some right ->
          let valid =
            GlobalResolution.less_or_equal
              global_resolution
              ~left:left.annotation
              ~right:right.annotation
            || GlobalResolution.less_or_equal
                 global_resolution
                 ~left:right.annotation
                 ~right:left.annotation
          in
          let base =
            Annotation.join ~type_join:(GlobalResolution.join global_resolution) left right
          in
          valid, Some base
      | None, None ->
          (* you only want to continue the nested join should both attribute trees exist *)
          not (Map.Tree.is_empty left.attributes || Map.Tree.is_empty right.attributes), None
      | _ -> false, None
    in
    let rec create_refinement_unit (valid, base) ~left_attributes ~right_attributes =
      let join left_attributes right_attributes =
        let join_refinement_units ~key ~data sofar =
          match data with
          | `Both
              ( { base = left_base; attributes = left_attributes },
                { base = right_base; attributes = right_attributes } ) ->
              valid_join left_base right_base
              |> fun annotation ->
              Identifier.Map.Tree.set
                sofar
                ~key
                ~data:(create_refinement_unit annotation ~left_attributes ~right_attributes)
          | `Left _
          | `Right _ ->
              sofar
        in
        Identifier.Map.Tree.fold2
          left_attributes
          right_attributes
          ~init:Identifier.Map.Tree.empty
          ~f:join_refinement_units
      in
      let attributes =
        if valid then
          join left_attributes right_attributes
        else
          Identifier.Map.Tree.empty
      in
      { base; attributes }
    in
    valid_join left.base right.base
    |> create_refinement_unit ~left_attributes:left.attributes ~right_attributes:right.attributes


let meet ~global_resolution left right =
  let valid_meet left_base right_base =
    match left_base, right_base with
    | Some left, Some right ->
        let valid =
          GlobalResolution.less_or_equal
            global_resolution
            ~left:left.annotation
            ~right:right.annotation
          || GlobalResolution.less_or_equal
               global_resolution
               ~left:right.annotation
               ~right:left.annotation
        in
        let base =
          Annotation.meet ~type_meet:(GlobalResolution.meet global_resolution) left right
        in
        valid, Some base
    | None, None ->
        (* you only want to continue the nested meet should at least one attribute tree exists *)
        not (Map.Tree.is_empty left.attributes && Map.Tree.is_empty right.attributes), None
    | _ -> false, None
  in
  let rec create_refinement_unit (valid, base) ~left_attributes ~right_attributes =
    let meet left_attributes right_attributes =
      let meet_refinement_units ~key ~data sofar =
        match data with
        | `Both
            ( { base = left_base; attributes = left_attributes },
              { base = right_base; attributes = right_attributes } ) ->
            valid_meet left_base right_base
            |> fun annotation ->
            Identifier.Map.Tree.set
              sofar
              ~key
              ~data:(create_refinement_unit annotation ~left_attributes ~right_attributes)
        | `Left refinement_unit
        | `Right refinement_unit ->
            Identifier.Map.Tree.set sofar ~key ~data:refinement_unit
      in
      Identifier.Map.Tree.fold2
        left_attributes
        right_attributes
        ~init:Identifier.Map.Tree.empty
        ~f:meet_refinement_units
    in
    let attributes =
      if valid then
        meet left_attributes right_attributes
      else
        Identifier.Map.Tree.empty
    in
    { base; attributes }
  in
  valid_meet left.base right.base
  |> create_refinement_unit ~left_attributes:left.attributes ~right_attributes:right.attributes


let widen ~global_resolution ~widening_threshold ~previous ~next ~iteration =
  if iteration + 1 >= widening_threshold then
    create ~base:(Annotation.create_mutable Type.Top) ()
  else
    join ~global_resolution previous next
