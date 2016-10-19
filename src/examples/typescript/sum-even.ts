const sumEven = (numbers: number[]) =>
  numbers
    .filter(n => n % 2 === 0)
    .reduce((total, n) => total + n, 0);

sum([1, 2, 3, 4, 5]); // 6
