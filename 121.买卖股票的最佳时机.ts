/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (57.65%)
 * Likes:    2250
 * Dislikes: 0
 * Total Accepted:    738.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 *
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 *
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 *
 *
 * 示例 2：
 *
 *
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 0
 *
 *
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 双指针
  // 假设 i 为最佳买入时机，low = prices[i] 代表当前买入的最低价格
  // 日子一天天过去，如果 i+1, i+2, i+n 的价格比前一次最低价格还要低，则更新 low
  // 如果 i+1, i+2, i+n 的价格比前一次最低价格要高，那计算出可以赚多少钱，用 prices[i+n] - low 表示
  // 因为我们要尽可能赚多的钱，因此维护一个 maxProfit 来记录最大的 prices[i+n] - low
  let low = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - low);
    }
  }
  return maxProfit;
}
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);

export {};
