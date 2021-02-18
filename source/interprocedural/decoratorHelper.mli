(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Ast
open Analysis
open Statement

val all_decorators : TypeEnvironment.ReadOnly.t -> Reference.t list

val all_decorator_bodies : TypeEnvironment.ReadOnly.t -> Define.t Reference.Map.t
