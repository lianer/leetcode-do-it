/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (60.17%)
 * Likes:    3422
 * Dislikes: 0
 * Total Accepted:    473.4K
 * Total Submissions: 779K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
function trap(height: number[]): number {
  const len = height.length;
  const left = [];
  const right = [];
  let sum = 0;

  left[0] = height[0];
  right[len - 1] = height[len - 1];

  // left: [1, len-1]
  // left[i] = max(left[i - 1], height[i])
  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  // right: [len-2, 0]
  // right[i] = max(right[i + 1], height[i])
  for (let i = len - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }

  // left[i] 和 right[i] 始终是大于等于 height[i]，因此对于左边高度不够或右边高度不够的情况，min(left[i], right[i]) - height[i] 得到的值为 0
  for (let i = 0; i < len - 1; i++) {
    sum += Math.min(left[i], right[i]) - height[i];
  }

  return sum;
}
// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([0, 1]), 0);
console.log(trap([0]), 0);

export {};
