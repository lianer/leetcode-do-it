/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  // 设数组 dp 的长度为 n，则 n 个阶梯分别对应下标 0 到 n-1，楼层顶部对应下标 n
  // 因可以选择下标为 0 或下标为 1 的台阶开始爬楼梯，所以 dp[0] = dp[1] = 0
  // 由于爬到第 n 个台阶有从 n-1 和 n-2 爬上来两种方式，分别花费 cost[n-1] 和 cost[n-2]
  // 因此得出状态转移方程：dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

  const n = cost.length;
  const dp: number[] = [0, 0];
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
}
// @lc code=end

console.log(minCostClimbingStairs([10, 15, 20]), 15);
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);

export {};
