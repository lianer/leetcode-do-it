/**
硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)

示例1:

 输入: n = 5
 输出：2
 解释: 有两种方式可以凑成总金额:
5=5
5=1+1+1+1+1
示例2:

 输入: n = 10
 输出：4
 解释: 有四种方式可以凑成总金额:
10=10
10=5+5
10=5+1+1+1+1+1
10=1+1+1+1+1+1+1+1+1+1
说明：

注意:

你可以假设：

0 <= n (总金额) <= 1000000


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function waysToChange(n: number): number {
  // 对于组合的问题，需要考虑去重（顺序问题）

  // 把大问题拆解为小问题
  // 设 i 遍历 [1 - n]，求 [1 - n] 可能的组合情况的总和
  // 设 j 遍历 [1, 5, 10, 25]，分别求该种组合情况是否存在，并进行累加
  // 设 dp 记录从 [1 - n] 之间可能的组合的情况的总和

  const dp = new Array(n + 1).fill(0);
  const coins = [1, 5, 10, 25];

  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 4; j++) {
      const coin = coins[j];
      if (i - coin >= 0) {
        console.log(i, j, coin);

        dp[i] = dp[i] + dp[i - coin];
      }
    }
  }

  return dp[n];
}

export {};

console.log(waysToChange(10), 4);
