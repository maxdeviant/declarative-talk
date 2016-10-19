let sum_even numbers =
  List.fold_left (+) 0 (
    List.filter (fun n -> n mod 2 = 0) numbers
  );;

sum_even [1; 2; 3; 4; 5];; (* 6 *)
