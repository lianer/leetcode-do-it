/*
122. 买卖股票的最佳时机 II

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/*
### 解题思路

关键信息：可以交易多次，并求最大利润，且必须在再次购买前出售掉之前的股票。

分析：就是找出连续上涨，并求它们的利润总和。

1. 找上涨，就得找到谷点和峰点
2. 先找到谷点，根据 prices[i] < prices[i + 1] 来判断当前的点是否是谷点
3. 再找到峰点，根据 prices[i] > prices[i + 1] 来判断当前的点是否是峰点
4. 把峰点减去谷点，就是该连续上涨的利润


### 复杂度分析

时间复杂度：O(n)。遍历一次。
空间复杂度：O(1)。需要常量的空间。

*/
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices: number[]): number {
  let peak = prices[0];
  let valley = prices[0];
  let profit = 0;
  let i = 0;
  while (i < prices.length - 1) {
    // 求连续的上涨的利润，即就是求出谷点和峰点，并求差
    // 需要先求谷点，后求峰点，不可反过来（反过来就是求跌的本金了）
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    profit += peak - valley;
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
console.log(maxProfit([1, 2, 3, 4, 5]), 4);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);

export { maxProfit };
