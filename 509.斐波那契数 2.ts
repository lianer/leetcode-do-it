function fib(n: number): number {
  // f(n) = f(n-1) + f(n-2)
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

export {};
