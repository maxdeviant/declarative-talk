int SumEven(int[] numbers) {
  int total = 0;
  for (int i = 0; i < numbers.Count(); i++) {
    if (numbers[i] % 2 == 0) {
      total += numbers[i];
    }
  }
  return total;
}

SumEven(new int[] { 1, 2, 3, 4, 5 }); // 6
