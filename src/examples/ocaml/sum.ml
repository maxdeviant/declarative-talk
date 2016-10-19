let sum numbers =
  List.fold_left (+) 0 numbers;;

sum [2; 4; 6; 8; 10];; (* 30 *)
