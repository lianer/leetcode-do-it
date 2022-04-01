/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 动态规划
  // 设 dp 数组，用 dp[i] 表示每个以 i 结尾的连续子数组的最大和
  // 每个 nums[i] 位置，我们都可以选择 dp[i-1] + nums[i] 或 nums[i] 当中较大的一个
  // 状态转移方程：f(i) = max(f(i) + nums[i], nums[i])
  const dp: number[] = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubArray([1]), 1);
console.log(maxSubArray([5, 4, -1, 7, 8]), 23);

export {};
