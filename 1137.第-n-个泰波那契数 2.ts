function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let a = 0,
    b = 1,
    c = 1,
    d = 2;
  for (let i = 3; i <= n; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return d;
  // return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

console.log(tribonacci(0), 0);
console.log(tribonacci(1), 1);
console.log(tribonacci(2), 1);
console.log(tribonacci(3), 2);
console.log(tribonacci(4), 4);

export {};
