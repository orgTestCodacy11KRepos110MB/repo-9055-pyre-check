(*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open Core
open OUnit2
module Request = CodeNavigationServer.Testing.Request
module Response = CodeNavigationServer.Testing.Response

let position line column = { Ast.Location.line; column }

let range start_line start_column stop_line stop_column =
  { Ast.Location.start = position start_line start_column; stop = position stop_line stop_column }


let assert_type_error_count ?overlay_id ~module_name ~expected client =
  let%lwt raw_response =
    ScratchProject.ClientConnection.send_request
      client
      Request.(Query (Query.GetTypeErrors { module_ = Module.OfName module_name; overlay_id }))
  in
  match Yojson.Safe.from_string raw_response with
  | `List [`String "TypeErrors"; `List errors] ->
      assert_equal
        ~ctxt:(ScratchProject.ClientConnection.get_context client)
        ~cmp:Int.equal
        ~printer:Int.to_string
        expected
        (List.length errors);
      Lwt.return_unit
  | _ as json ->
      let message =
        Format.sprintf "Expected type error response but got: `%s`" (Yojson.Safe.to_string json)
      in
      assert_failure message


let test_no_op_server context =
  ScratchProject.setup ~context ~include_typeshed_stubs:false []
  |> ScratchProject.test_server_with_one_connection ~f:(fun _ -> Lwt.return_unit)


let test_invalid_request context =
  let test_invalid_request client =
    let%lwt raw_response = ScratchProject.ClientConnection.send_raw_request client "derp" in
    match Yojson.Safe.from_string raw_response with
    | `List [`String "Error"; `List (`String "InvalidRequest" :: _)] -> Lwt.return_unit
    | _ as json ->
        let message =
          Format.sprintf "Expected error response but got: `%s`" (Yojson.Safe.to_string json)
        in
        assert_failure message
  in
  ScratchProject.setup ~context ~include_typeshed_stubs:false []
  |> ScratchProject.test_server_with_one_connection ~f:test_invalid_request


let test_stop_request context =
  let test_stop_request client =
    let%lwt _ =
      ScratchProject.ClientConnection.send_request client (Request.Command Request.Command.Stop)
    in
    (* Consuming the stop request would make the server terminate itself immeidately, bypassing this
       eternal-wait. *)
    let wait_forever, _ = Lwt.wait () in
    wait_forever
  in
  ScratchProject.setup ~context ~include_typeshed_stubs:false []
  |> ScratchProject.test_server_with_one_connection ~f:test_stop_request


let test_get_type_errors_request context =
  let project =
    ScratchProject.setup ~context ~include_typeshed_stubs:false ["test.py", "reveal_type(42)"]
  in
  let root = ScratchProject.source_root_of project in
  let test_path = PyrePath.create_relative ~root ~relative:"test.py" in
  let expected_error =
    Analysis.AnalysisError.Instantiated.of_yojson
      (`Assoc
        [
          "line", `Int 1;
          "column", `Int 0;
          "stop_line", `Int 1;
          "stop_column", `Int 11;
          "path", `String (PyrePath.absolute test_path);
          "code", `Int (-1);
          "name", `String "Revealed type";
          ( "description",
            `String "Revealed type [-1]: Revealed type for `42` is `typing_extensions.Literal[42]`."
          );
          ( "long_description",
            `String "Revealed type [-1]: Revealed type for `42` is `typing_extensions.Literal[42]`."
          );
          ( "concise_description",
            `String "Revealed type [-1]: Revealed type for `42` is `typing_extensions.Literal[42]`."
          );
          "define", `String "test.$toplevel";
        ])
    |> Result.ok_or_failwith
  in
  let assert_type_errors_for_module ~module_ client =
    ScratchProject.ClientConnection.assert_response
      client
      ~request:Request.(Query (Query.GetTypeErrors { overlay_id = None; module_ }))
      ~expected:(Response.TypeErrors [expected_error])
  in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        assert_type_errors_for_module ~module_:(Request.Module.OfName "test");
        assert_type_errors_for_module ~module_:(Request.Module.OfPath (PyrePath.absolute test_path));
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.GetTypeErrors { overlay_id = None; module_ = Module.OfName "doesnotexist" }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.GetTypeErrors
                   { overlay_id = None; module_ = Module.OfPath "/doesnotexist.py" }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.GetTypeErrors
                   { overlay_id = Some "doesnotexist"; module_ = Module.OfName "test" }))
          ~kind:"OverlayNotFound";
      ]


let test_local_update_request context =
  ScratchProject.setup ~context ~include_typeshed_stubs:false ["test.py", "reveal_type(42)"]
  |> ScratchProject.test_server_with
       ~style:ScratchProject.ClientConnection.Style.Sequential
       ~clients:
         [
           assert_type_error_count ~module_name:"test" ~expected:1;
           ScratchProject.ClientConnection.assert_response
             ~request:
               Request.(
                 Command
                   (Command.LocalUpdate
                      {
                        module_ = Module.OfName "test";
                        content = Some "reveal_type(43)\nreveal_type(44)";
                        overlay_id = "foo";
                      }))
             ~expected:Response.Ok;
           assert_type_error_count ~module_name:"test" ~overlay_id:"foo" ~expected:2;
           ScratchProject.ClientConnection.assert_error_response
             ~request:
               Request.(
                 Command
                   (Command.LocalUpdate
                      {
                        module_ = Module.OfName "doesnotexist";
                        content = Some "";
                        overlay_id = "foo";
                      }))
             ~kind:"ModuleNotTracked";
           ScratchProject.ClientConnection.assert_response
             ~request:
               Request.(
                 Command
                   (Command.LocalUpdate
                      {
                        module_ = Module.OfName "test";
                        content = Some "reveal_type(43)\nreveal_type(44)\nreveal_type(45)";
                        overlay_id = "bar";
                      }))
             ~expected:Response.Ok;
           assert_type_error_count ~module_name:"test" ~overlay_id:"bar" ~expected:3;
           assert_type_error_count ~module_name:"test" ~overlay_id:"foo" ~expected:2;
           assert_type_error_count ~module_name:"test" ~expected:1;
           ScratchProject.ClientConnection.assert_response
             ~request:
               Request.(
                 Command
                   (Command.LocalUpdate
                      { module_ = Module.OfName "test"; content = None; overlay_id = "foo" }))
             ~expected:Response.Ok;
           assert_type_error_count ~module_name:"test" ~overlay_id:"foo" ~expected:1;
         ]


let test_file_update_request context =
  let project =
    ScratchProject.setup ~context ~include_typeshed_stubs:false ["test.py", "reveal_type(42)"]
  in
  let root = ScratchProject.source_root_of project in
  let test_path = PyrePath.create_relative ~root ~relative:"test.py" in
  let test2_path = PyrePath.create_relative ~root ~relative:"test2.py" in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        assert_type_error_count ~module_name:"test" ~expected:1;
        (fun _ ->
          PyrePath.remove test_path;
          Lwt.return_unit);
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Command
                (Command.FileUpdate
                   [FileUpdateEvent.{ kind = Kind.Deleted; path = PyrePath.absolute test_path }]))
          ~expected:Response.Ok;
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.GetTypeErrors
                   { overlay_id = None; module_ = Module.OfPath (PyrePath.absolute test_path) }))
          ~kind:"ModuleNotTracked";
        (fun _ ->
          File.create test2_path ~content:"reveal_type(43)\nreveal_type(44)" |> File.write;
          Lwt.return_unit);
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Command
                (Command.FileUpdate
                   [
                     FileUpdateEvent.
                       { kind = Kind.CreatedOrChanged; path = PyrePath.absolute test2_path };
                   ]))
          ~expected:Response.Ok;
        assert_type_error_count ~module_name:"test2" ~expected:2;
      ]


let test_file_and_local_update context =
  let project =
    ScratchProject.setup
      ~context
      ~include_typeshed_stubs:false
      ["test.py", "reveal_type(42)\nreveal_type(43)"; "test2.py", ""]
  in
  let root = ScratchProject.source_root_of project in
  let test2_path = PyrePath.create_relative ~root ~relative:"test2.py" in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        assert_type_error_count ~module_name:"test" ~expected:2;
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Command
                (Command.LocalUpdate
                   {
                     module_ = Module.OfName "test";
                     content = Some "from test2 import x";
                     overlay_id = "foo";
                   }))
          ~expected:Response.Ok;
        assert_type_error_count ~module_name:"test" ~overlay_id:"foo" ~expected:1;
        (fun _ ->
          File.create test2_path ~content:"x: int = 42" |> File.write;
          Lwt.return_unit);
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Command
                (Command.FileUpdate
                   [
                     FileUpdateEvent.
                       { kind = Kind.CreatedOrChanged; path = PyrePath.absolute test2_path };
                   ]))
          ~expected:Response.Ok;
        assert_type_error_count ~module_name:"test" ~overlay_id:"foo" ~expected:0;
      ]


let test_hover_request context =
  let project =
    ScratchProject.setup ~context ~include_typeshed_stubs:false ["test.py", "x: float = 4.2"]
  in
  let root = ScratchProject.source_root_of project in
  let test_path = PyrePath.create_relative ~root ~relative:"test.py" in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              (* This location point to empty space. *)
              Query
                (Query.Hover
                   { overlay_id = None; module_ = Module.OfName "test"; position = position 1 2 }))
          ~expected:Response.(Hover { contents = [] });
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Query
                (Query.Hover
                   { overlay_id = None; module_ = Module.OfName "test"; position = position 1 0 }))
          ~expected:
            Response.(
              Hover { contents = HoverContent.[{ kind = Kind.PlainText; value = "`float`" }] });
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Query
                (Query.Hover
                   {
                     overlay_id = None;
                     module_ = Module.OfPath (PyrePath.absolute test_path);
                     position = position 1 0;
                   }))
          ~expected:
            Response.(
              Hover { contents = HoverContent.[{ kind = Kind.PlainText; value = "`float`" }] });
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.Hover
                   {
                     overlay_id = None;
                     module_ = Module.OfName "doesnotexist";
                     position = position 1 0;
                   }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.Hover
                   {
                     overlay_id = None;
                     module_ = Module.OfPath "/doesnotexist.py";
                     position = position 1 0;
                   }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.Hover
                   {
                     overlay_id = Some "doesnotexist";
                     module_ = Module.OfName "test";
                     position = position 1 0;
                   }))
          ~kind:"OverlayNotFound";
      ]


let test_location_of_definition_request context =
  let project =
    ScratchProject.setup
      ~context
      ~include_typeshed_stubs:false
      ["test.py", "x: int = 42"; "test2.py", "import test\ny: int = test.x"]
  in
  let root = ScratchProject.source_root_of project in
  let test_path = PyrePath.create_relative ~root ~relative:"test.py" in
  let test2_path = PyrePath.create_relative ~root ~relative:"test2.py" in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              (* This location points to an empty space *)
              Query
                (Query.LocationOfDefinition
                   { overlay_id = None; module_ = Module.OfName "test2"; position = position 2 8 }))
          ~expected:Response.(LocationOfDefinition []);
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              (* This location points to `test.x` *)
              Query
                (Query.LocationOfDefinition
                   { overlay_id = None; module_ = Module.OfName "test2"; position = position 2 14 }))
          ~expected:
            Response.(
              LocationOfDefinition
                [{ DefinitionLocation.path = PyrePath.absolute test_path; range = range 1 0 1 1 }]);
        ScratchProject.ClientConnection.assert_response
          ~request:
            Request.(
              Query
                (Query.LocationOfDefinition
                   {
                     overlay_id = None;
                     module_ = Module.OfPath (PyrePath.absolute test2_path);
                     position = position 2 14;
                   }))
          ~expected:
            Response.(
              LocationOfDefinition
                [{ DefinitionLocation.path = PyrePath.absolute test_path; range = range 1 0 1 1 }]);
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.LocationOfDefinition
                   {
                     overlay_id = None;
                     module_ = Module.OfName "doesnotexist";
                     position = position 1 0;
                   }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.LocationOfDefinition
                   {
                     overlay_id = None;
                     module_ = Module.OfPath "/doesnotexist.py";
                     position = position 1 0;
                   }))
          ~kind:"ModuleNotTracked";
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.LocationOfDefinition
                   {
                     overlay_id = Some "doesnotexist";
                     module_ = Module.OfName "test";
                     position = position 1 0;
                   }))
          ~kind:"OverlayNotFound";
      ]


let watchman_version = "fake_watchman_version"

let watchman_initial_clock = "fake:clock:0"

(* We use a mailbox variable in this test to get a more precise control of when a given watchman
   response can reach the Pyre serer. *)
let create_mock_watchman mailbox =
  let initialize_stage = ref 0 in
  let send _ = Lwt.return_unit in
  let receive () =
    match !initialize_stage with
    | 0 ->
        let watchman_watch_response =
          `Assoc ["version", `String watchman_version; "watcher", `String "fake_watcher"]
        in
        initialize_stage := 1;
        Lwt.return_some watchman_watch_response
    | 1 ->
        let watchman_subscribe_response =
          `Assoc ["version", `String watchman_version; "clock", `String watchman_initial_clock]
        in
        initialize_stage := 2;
        Lwt.return_some watchman_subscribe_response
    | _ ->
        let%lwt message = Lwt_mvar.take mailbox in
        Lwt.return_some message
  in
  Server.Watchman.Raw.create_for_testing ~send ~receive ()


let test_watchman_integration context =
  let watchman_mailbox = Lwt_mvar.create_empty () in
  let mock_watchman = create_mock_watchman watchman_mailbox in
  let project =
    ScratchProject.setup
      ~context
      ~include_typeshed_stubs:false
      ~watchman:mock_watchman
      ["test.py", ""]
  in
  let root = ScratchProject.source_root_of project in
  let test_path = PyrePath.create_relative ~root ~relative:"test.py" in
  let watchman_update_response file_names =
    `Assoc
      [
        "is_fresh_instance", `Bool false;
        "files", `List (List.map file_names ~f:(fun name -> `String name));
        "root", `String (PyrePath.absolute root);
        "version", `String watchman_version;
        "clock", `String "fake:clock:update";
        "since", `String watchman_initial_clock;
      ]
  in
  ScratchProject.test_server_with
    project
    ~style:ScratchProject.ClientConnection.Style.Sequential
    ~clients:
      [
        assert_type_error_count ~module_name:"test" ~expected:0;
        (fun _ ->
          File.create ~content:"reveal_type(42)" test_path |> File.write;
          Lwt_mvar.put watchman_mailbox (watchman_update_response ["test.py"]));
        assert_type_error_count ~module_name:"test" ~expected:1;
        (fun _ ->
          PyrePath.remove test_path;
          Lwt_mvar.put watchman_mailbox (watchman_update_response ["test.py"]));
        ScratchProject.ClientConnection.assert_error_response
          ~request:
            Request.(
              Query
                (Query.GetTypeErrors
                   { overlay_id = None; module_ = Module.OfPath (PyrePath.absolute test_path) }))
          ~kind:"ModuleNotTracked";
      ]


let test_watchman_failure context =
  let watchman_mailbox = Lwt_mvar.create_empty () in
  let mock_watchman = create_mock_watchman watchman_mailbox in
  let test_watchman_failure _ =
    let cancel_response = `Assoc ["canceled", `Bool true] in
    let%lwt () = Lwt_mvar.put watchman_mailbox cancel_response in
    (* Consuming the watchman cancel notification would make the server terminate itself
       immeidately, bypassing this eternal-wait. *)
    let wait_forever, _ = Lwt.wait () in
    wait_forever
  in
  let project =
    ScratchProject.setup ~context ~include_typeshed_stubs:false ~watchman:mock_watchman []
  in
  try%lwt
    let%lwt () = ScratchProject.test_server_with_one_connection ~f:test_watchman_failure project in
    assert_failure "Server is expected to crash but it returned normally instead"
  with
  | Server.Watchman.SubscriptionError _ -> Lwt.return_unit


let () =
  "basic_test"
  >::: [
         "no_op_server" >:: OUnitLwt.lwt_wrapper test_no_op_server;
         "invalid_request" >:: OUnitLwt.lwt_wrapper test_invalid_request;
         "stop_request" >:: OUnitLwt.lwt_wrapper test_stop_request;
         "get_type_errors_request" >:: OUnitLwt.lwt_wrapper test_get_type_errors_request;
         "local_update_request" >:: OUnitLwt.lwt_wrapper test_local_update_request;
         "file_update_request" >:: OUnitLwt.lwt_wrapper test_file_update_request;
         "file_and_local_update" >:: OUnitLwt.lwt_wrapper test_file_and_local_update;
         "hover_request" >:: OUnitLwt.lwt_wrapper test_hover_request;
         "location_of_definition_request"
         >:: OUnitLwt.lwt_wrapper test_location_of_definition_request;
         "watchman_integration" >:: OUnitLwt.lwt_wrapper test_watchman_integration;
         "watchman_failure" >:: OUnitLwt.lwt_wrapper test_watchman_failure;
       ]
  |> Test.run
