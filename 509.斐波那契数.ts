/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  // 斐波那契数示例：0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  // 边界条件：F(0) = 0, F(1) = 1
  // 状态转移方程：F(n) = F(n - 1) + F(n - 2)
  // 模拟：n + (n - 1) + (n - 2) + (n - 3) + ... + 1 + 0
  // 考虑采用递归的方式，当 n 为 0 或 1 时退出递归
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
// @lc code=end

console.log(fib(2), 1);
console.log(fib(3), 2);
console.log(fib(4), 3);
console.log(fib(5), 5);
console.log(fib(6), 8);
console.log(fib(7), 13);

export {};
