open Test

let () = List.iter (fun x -> ignore (OUnit.run_test_tt_main x)) Tests.suite
