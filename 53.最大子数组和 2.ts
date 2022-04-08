/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start

function maxSubArray(nums: number[]): number {
  // 动态规划
  // 空间优化
  // 从 i=2 开始，每个可以从“与前面合并”或“不与前面合并”
  // 设 pre 为前面已经合并元素的总和，每一轮循环对比 pre 和 pre+nums[i]，更新 pre
  // 设 max 为最大的 pre，每一轮循环对比 max 和 pre 取大值，更新 max
  let pre = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    max = Math.max(max, pre);
  }
  return max;
}
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([1]), 1);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);

export {};
