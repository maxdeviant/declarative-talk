int Sum(int[] numbers) {
  int total = 0;
  for (int i = 0; i < numbers.Count(); i++) {
    total += numbers[i];
  }
  return total;
}

Sum(new int[] { 2, 4, 6, 8, 10 }); // 30
