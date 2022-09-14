(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core

type t = {
  sources: SanitizeTransform.SourceSet.t;
  sinks: SanitizeTransform.SinkSet.t;
}
[@@deriving compare, eq, hash, sexp]

let empty = { sources = SanitizeTransform.SourceSet.empty; sinks = SanitizeTransform.SinkSet.empty }

let is_empty { sources; sinks } =
  SanitizeTransform.SourceSet.is_empty sources && SanitizeTransform.SinkSet.is_empty sinks


let pp formatter { sources; sinks } =
  let is_empty_sources = SanitizeTransform.SourceSet.is_empty sources in
  let is_empty_sinks = SanitizeTransform.SinkSet.is_empty sinks in
  if is_empty_sources then
    if is_empty_sinks then
      Format.fprintf formatter ""
    else
      SanitizeTransform.SinkSet.pp formatter sinks
  else if is_empty_sinks then
    SanitizeTransform.SourceSet.pp formatter sources
  else
    Format.fprintf
      formatter
      "%a:%a"
      SanitizeTransform.SourceSet.pp
      sources
      SanitizeTransform.SinkSet.pp
      sinks


let show = Format.asprintf "%a" pp

let from_sources sources = { sources; sinks = SanitizeTransform.SinkSet.empty }

let from_sinks sinks = { sources = SanitizeTransform.SourceSet.empty; sinks }

let union
    { sources = sources_left; sinks = sinks_left }
    { sources = sources_right; sinks = sinks_right }
  =
  {
    sources = SanitizeTransform.SourceSet.join sources_left sources_right;
    sinks = SanitizeTransform.SinkSet.join sinks_left sinks_right;
  }


let diff
    { sources = sources_left; sinks = sinks_left }
    { sources = sources_right; sinks = sinks_right }
  =
  {
    sources = SanitizeTransform.SourceSet.diff sources_left sources_right;
    sinks = SanitizeTransform.SinkSet.diff sinks_left sinks_right;
  }


let subset
    { sources = sources_left; sinks = sinks_left }
    { sources = sources_right; sinks = sinks_right }
  =
  SanitizeTransform.SourceSet.less_or_equal ~left:sources_left ~right:sources_right
  && SanitizeTransform.SinkSet.less_or_equal ~left:sinks_left ~right:sinks_right


let mem { sources; sinks } = function
  | SanitizeTransform.Source source -> SanitizeTransform.SourceSet.mem source sources
  | SanitizeTransform.Sink sink -> SanitizeTransform.SinkSet.mem sink sinks


let all = { sources = SanitizeTransform.SourceSet.all; sinks = SanitizeTransform.SinkSet.all }

let is_all { sources; sinks } =
  SanitizeTransform.SourceSet.is_all sources && SanitizeTransform.SinkSet.is_all sinks
