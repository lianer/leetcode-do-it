/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (61.09%)
 * Likes:    870
 * Dislikes: 0
 * Total Accepted:    198.2K
 * Total Submissions: 323.1K
 * Testcase Example:  '[10,15,20]'
 *
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 *
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 *
 * 请你计算并返回达到楼梯顶部的最低花费。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：cost = [10,15,20]
 * 输出：15
 * 解释：你将从下标为 1 的台阶开始。
 * - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
 * 总花费为 15 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：cost = [1,100,1,1,1,100,1,1,100,1]
 * 输出：6
 * 解释：你将从下标为 0 的台阶开始。
 * - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
 * - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
 * - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
 * - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
 * 总花费为 6 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= cost.length <= 1000
 * 0 <= cost[i] <= 999
 *
 *
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  // f(n) = Min(cost[n] + f(n-1), const[n] + f(n-2))
  const len = cost.length;
  let a = 0, // 从第 0 阶开始，初始花费为 0
    b = 0; // 从第 1 阶开始，初始花费也为 0
  for (let i = 2; i <= len; i++) {
    // 从第 2 阶开始计算最小花费
    // 到第 i 阶，有两种方式，到第 i-1 阶的费用加上第 i-1 阶本身的费用，或到第 i-2 阶的费用加上第 i-2 阶本身的费用
    const c = Math.min(cost[i - 2] + a, cost[i - 1] + b);
    a = b;
    b = c;
  }
  return b;
}
// @lc code=end

console.log(minCostClimbingStairs([10, 15, 20]), 15);

export {};
