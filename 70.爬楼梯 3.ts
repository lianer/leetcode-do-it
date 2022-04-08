function climbStairs(n: number): number {
  // 斐波那契数列公式
  // https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97/99145?fr=aladdin
  const sqrt5 = Math.sqrt(5);
  const x1 = Math.pow((1 + sqrt5) / 2, n + 1); // 斐波那契数列是从 1 1 2 3 开始的，而爬楼梯是从 0 开始的，因此需要 n+1
  const x2 = Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round((x1 - x2) / Math.sqrt(5));
}

console.log(climbStairs(1), 1);
console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5);
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));

export {};
