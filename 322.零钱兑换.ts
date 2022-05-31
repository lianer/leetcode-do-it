/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (45.23%)
 * Likes:    1960
 * Dislikes: 0
 * Total Accepted:    448.7K
 * Total Submissions: 983.4K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 *
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 *
 * 你可以认为每种硬币的数量是无限的。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 *
 * 示例 2：
 *
 *
 * 输入：coins = [2], amount = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：coins = [1], amount = 0
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2^31 - 1
 * 0 <= amount <= 10^4
 *
 *
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // 用背包思想，把大背包化解为小背包求解
  // 设 dp[n] 为 1-amount 内最少硬币的数量
  // 设第一层循环 i 为 1-amount，把 amount 化解为小问题
  // 设第二层循环 j 为 coins 的币种，遍历求最小的 dp[i] = min(dp[i], dp[amount-i] + 1)

  const dp = new Array(amount + 1).fill(Infinity); // 为了方便 amount 从 1 开始计算，把 dp 的长度增加一位，并设 dp[0] = 0

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
// @lc code=end

export {};

console.log(coinChange([1, 2, 5], 11), 3);
console.log(coinChange([2], 3), -1);
