/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 *
 * https://leetcode-cn.com/problems/coin-change-2/description/
 *
 * algorithms
 * Medium (67.51%)
 * Likes:    830
 * Dislikes: 0
 * Total Accepted:    166.3K
 * Total Submissions: 242.4K
 * Testcase Example:  '5\n[1,2,5]'
 *
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 *
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 *
 * 假设每一种面额的硬币有无限个。
 *
 * 题目数据保证结果符合 32 位带符号整数。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：amount = 5, coins = [1, 2, 5]
 * 输出：4
 * 解释：有四种方式可以凑成总金额：
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 *
 *
 * 示例 2：
 *
 *
 * 输入：amount = 3, coins = [2]
 * 输出：0
 * 解释：只用面额 2 的硬币不能凑成总金额 3 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：amount = 10, coins = [10]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * coins 中的所有值 互不相同
 * 0
 *
 *
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  // 动态规划
  // 假设 coins = [1, 2, 5]
  // 第一层循环，会分别遍历 coin = 1, 2, 5 的情况
  // 第二层循环，将 amount 化解为小的问题，从 coin 的面额开始增加
  // 第一次循环，coin = 1
  // 硬币组合情况比较确定，dp[i] = dp[i] + dp[i - coin]
  // 这里的 dp[i] 指的是上一次硬币产生的组合情况
  // dp[i-coin] 指的是这一次加入新的面额的硬币产生的新的情况
  // 每多一种面额的硬币，dp[i] 就会发生累加
  // 设 dp 为一个初始值都为 0 的数组，长度为 amount + 1（因为在遍历 amount 的过程中，amount 本身也是在遍历范围内的，因此长度就是 amount + 1）
  // 边界情况：dp[0] = 1，这是为了满足 dp[i - coin] 中的 i - coin = 0 的情况
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin];
    }
  }
  return dp[amount];
}
// @lc code=end

export {};

console.log(change(5, [1, 2, 5]), 4);
