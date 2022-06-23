(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open OUnit2
open Test

let test_typed_dictionary_attributes context =
  let assert_equivalent_typed_dictionary_attribute_types =
    assert_equivalent_typed_dictionary_attribute_types ~context
  in
  assert_equivalent_typed_dictionary_attribute_types
    ~source:
      {|
      from typing_extensions import TypedDict

      class Movie(TypedDict):
        name: str
        year: int
    |}
    ~class_name:"Movie"
    {|
        from typing import overload, Optional, TypeVar, Union
        from typing_extensions import Literal as L

        _T = TypeVar("_T")

        class Movie:
          @overload
          def __init__(self, *, name: str, year: int) -> None: ...
          @overload
          def __init__(self, movie: Movie, /) -> None: ...
          def __init__(self) -> DontCare: ...

          @overload
          def __getitem__(self, k: L["name"]) -> str: ...
          @overload
          def __getitem__(self, k: L["year"]) -> int: ...
          def __getitem__(self) -> DontCare: ...

          @overload
          def __setitem__(self, k: L["name"], v: str) -> None: ...
          @overload
          def __setitem__(self, k: L["year"], v: int) -> None: ...
          def __setitem__(self) -> DontCare: ...

          @overload
          def get(self, k: L["name"]) -> Optional[str]: ...
          @overload
          def get(self, k: L["name"], default: _T) -> Union[str, _T]: ...
          @overload
          def get(self, k: L["year"]) -> Optional[int]: ...
          @overload
          def get(self, k: L["year"], default: _T) -> Union[int, _T]: ...
          def get(self) -> DontCare: ...

          @overload
          def setdefault(self, k: L["name"], default: str) -> str: ...
          @overload
          def setdefault(self, k: L["year"], default: int) -> int: ...
          def setdefault(self) -> DontCare: ...

          @overload
          def update(self, *, name: str=..., year: int=...) -> None: ...
          @overload
          def update(self, movie: Movie, /) -> None: ...
          def update(self) -> DontCare: ...
      |};
  ()


let () =
  "typedDictionary"
  >::: ["attributes" >: test_case ~length:Long test_typed_dictionary_attributes]
  |> Test.run
