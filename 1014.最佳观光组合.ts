/*
 * @lc app=leetcode.cn id=1014 lang=typescript
 *
 * [1014] 最佳观光组合
 *
 * https://leetcode-cn.com/problems/best-sightseeing-pair/description/
 *
 * algorithms
 * Medium (56.23%)
 * Likes:    311
 * Dislikes: 0
 * Total Accepted:    52.9K
 * Total Submissions: 93.7K
 * Testcase Example:  '[8,1,5,2,6]'
 *
 * 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。
 *
 * 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去
 * 它们两者之间的距离。
 *
 * 返回一对观光景点能取得的最高分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：values = [8,1,5,2,6]
 * 输出：11
 * 解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
 *
 *
 * 示例 2：
 *
 *
 * 输入：values = [1,2]
 * 输出：2
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * 1
 *
 *
 */

// @lc code=start
function maxScoreSightseeingPair(values: number[]): number {
  // 设 j, i 为 values 的下标，且 j > i
  // ans = values[j] + values[i] - (j - i)
  // 变形一下
  // ans = (values[j] - j) + (values[i] + i)
  // 设 right = values[j] - j
  // 设 left = values[i] + i，这里就代表动态规划中的 dp 值，记录 values[i] + i 的最大值
  // 设 ans 记录 left + right 的最大值

  let ans = 0;
  let left = values[0];
  let right = 0;

  for (let j = 1; j < values.length; j++) {
    right = values[j] - j;

    ans = Math.max(ans, left + right); // left 表示过往的最大值，right 表示当前值，可以选择加 right，也可以选择不加 right

    left = Math.max(left, values[j] + j);
  }

  return ans;
}
// @lc code=end

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]), 11);

export {};
