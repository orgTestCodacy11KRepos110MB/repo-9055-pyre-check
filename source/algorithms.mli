(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(*
 * A divide and conquer implementation of fold.
 * Example with four elements:
 * Traditional fold:        f(1, f(2, f(3, 4)))
 * Divide and conquer fold: f(f(1, 2), f(3, 4))
 *
 * Requires f to be associative.
 *
 * With n = length of the list, O(n log(n)) for cases
 * where (f sofar element) is linear in number of elements
 * already folden over, as opposed to O(n^2).
 *)
val fold_divide_and_conquer : 'a list -> f:('a -> 'a -> 'a) -> init:'a -> 'a
