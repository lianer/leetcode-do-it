/*
 * @lc app=leetcode.cn id=638 lang=javascript
 *
 * [638] 大礼包
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  const n = price.length;

  const dfs = function (curNeeds) {
    let minPrice = 0;

    // 原价购买
    for (let i = 0; i < n; i++) {
      minPrice += price[i] * curNeeds[i];
    }

    // 礼包购买
    for (let curSpecial of special) {
      const specialPrice = curSpecial[n];
      const nextNeeds = [];

      // 一个个礼包尝试过去，并与原价购买对比，选出一个最小的
      for (let i = 0; i < n; i++) {
        // 要求“你不能购买超出购物清单指定数量的物品”
        if (curSpecial[i] > curNeeds[i]) {
          break;
        }
        nextNeeds.push(curNeeds[i] - curSpecial[i]);
      }

      if (nextNeeds.length === n) {
        // 动态规划 dp[needs] = min{price(i) + dp[needs - needs(i)]}
        // 其中，i表示其中一个大礼包的下标，
        // price(i)表示第i个大礼包的价格，
        // needs(i)表示大礼包中包含的物品清单，
        // needs - needs(i) 表示购物清单 needs 减去第 i 个大礼包中包含的物品清单后剩余的物品清单
        minPrice = Math.min(minPrice, dfs(nextNeeds) + specialPrice);
      }
    }

    return minPrice;
  };

  return dfs(needs);
};
// @lc code=end

var price = [2, 5],
  special = [
    [3, 0, 5],
    [1, 2, 10],
  ],
  needs = [3, 2];
console.log(shoppingOffers(price, special, needs), 14);
