/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // 动态转移方程： f(x) = f(x−1) + f(x−2)
  // 它意味着爬到第 x 级台阶的方案数是爬到第 x - 1 级台阶的方案数和爬到第 x - 2 级台阶的方案数的和。
  // 很好理解，因为每次只能爬 1 级或 2 级，所以 f(x) 只能从 f(x - 1) 和 f(x - 2) 转移过来，而这里要统计方案总数，我们就需要对这两项的贡献求和。
  // 边界情况：我们是从第 0 级开始爬的，所以从第 0 级爬到第 0 级我们可以看作只有一种方案，即 f(0) = 1；从第 0 级到第 1 级也只有一种方案，即爬一级，f(1) = 1

  // 滚动数组
  if (n <= 1) return 1;
  let a = 0, // 由于 for 循环中，ab 会先完成赋值动作，然后再计算 c，即在定义 ab 时要先左移一位
    b = 1,
    c = 1;
  for (let i = 2; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}
// @lc code=end

console.log(climbStairs(2), 2);
console.log(climbStairs(3), 3);
console.log(climbStairs(4), 5);
console.log(climbStairs(5), 8);

export {};
