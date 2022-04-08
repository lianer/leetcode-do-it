function climbStairs(n: number): number {
  // f(n) = f(n-1) + f(n-2)
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1,
    b = 2,
    c = 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
console.log(climbStairs(1), 1);
console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5);
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));

export {};
