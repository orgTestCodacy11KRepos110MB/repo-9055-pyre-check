(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(* TODO(T132410158) Add a module-level doc comment. *)

module Data = TypeInferenceData
module Local = TypeInferenceLocal
module Reporting = TypeInferenceReporting
module Domain = TypeInferenceDomain
module Result = TypeInferenceResult
module Analysis = TypeInferenceAnalysis

module Private = struct
  module SharedMemory = TypeInferenceSharedMemory
end
