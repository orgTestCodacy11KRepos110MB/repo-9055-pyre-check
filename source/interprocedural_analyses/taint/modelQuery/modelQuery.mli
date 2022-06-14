(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

val apply_callable_query_rule
  :  verbose:bool ->
  resolution:Analysis.GlobalResolution.t ->
  rule:Taint.ModelParser.Internal.ModelQuery.rule ->
  callable:Interprocedural.Target.t ->
  (Taint.ModelParser.Internal.annotation_kind * Taint.ModelParser.Internal.taint_annotation) list

val apply_attribute_query_rule
  :  verbose:bool ->
  resolution:Analysis.GlobalResolution.t ->
  rule:Taint.ModelParser.Internal.ModelQuery.rule ->
  name:Ast.Reference.t ->
  annotation:Ast.Expression.t option ->
  Taint.ModelParser.Internal.taint_annotation list

val apply_all_rules
  :  resolution:Analysis.Resolution.t ->
  scheduler:Scheduler.t ->
  configuration:Taint.TaintConfiguration.t ->
  rule_filter:int list option ->
  rules:Taint.ModelParser.Internal.ModelQuery.rule list ->
  callables:Interprocedural.Target.t list ->
  stubs:Interprocedural.Target.HashSet.t ->
  environment:Analysis.TypeEnvironment.ReadOnly.t ->
  models:Taint.Registry.t ->
  Taint.Registry.t

val generate_models_from_queries
  :  static_analysis_configuration:Configuration.StaticAnalysis.t ->
  scheduler:Scheduler.t ->
  environment:Analysis.TypeEnvironment.ReadOnly.t ->
  callables:Interprocedural.Target.t list ->
  stubs:Interprocedural.Target.t Base.Hash_set.t ->
  taint_configuration:Taint.TaintConfiguration.t ->
  initial_models:Taint.Fixpoint.Registry.t ->
  Taint.ModelParser.Internal.ModelQuery.rule list ->
  Taint.Fixpoint.Registry.t
