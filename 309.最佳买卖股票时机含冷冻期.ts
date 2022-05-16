/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (62.46%)
 * Likes:    1196
 * Dislikes: 0
 * Total Accepted:    171.3K
 * Total Submissions: 272.5K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​
 *
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 *
 *
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 *
 *
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: prices = [1,2,3,0,2]
 * 输出: 3
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 *
 * 示例 2:
 *
 *
 * 输入: prices = [1]
 * 输出: 0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 动态规划
  // 相比于 122.买卖股票的最佳时机-ii 增加了冷冻期
  // 将情况分为三种，目前持有股票，目前未持有股票并处于冷冻期中，目前未持有股票并不处于冷冻期中
  // 针对三种情况分别设为 dp0, dp1, dp2
  // 有：
  // dp0 = max(dp0, dp2 - prices[i])
  // dp1 = dp0 + prices[i]
  // dp2 = max(dp2, dp1)
  //
  // 在第 0 天时，有：
  // dp0 = -prices[0]
  // dp1 = 0
  // dp2 = 0

  let dp0 = -prices[0];
  let dp1 = 0;
  let dp2 = 0;

  for (let i = 1; i < prices.length; i++) {
    let _dp0 = dp0,
      _dp1 = dp1,
      _dp2 = dp2;
    dp0 = Math.max(_dp0, _dp2 - prices[i]);
    dp1 = _dp0 + prices[i];
    dp2 = Math.max(_dp2, _dp1);
  }

  return Math.max(dp1, dp2);
}
// @lc code=end

console.log(maxProfit([1, 2, 3, 0, 2]), 3);

export {};
