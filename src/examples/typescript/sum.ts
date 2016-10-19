const sum = (numbers: number[]) =>
  numbers.reduce((total, n) => total + n, 0);

sum([2, 4, 6, 8, 10]); // 30
