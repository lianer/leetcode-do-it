/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  // 动态规划
  // 设 k 为最后一间房屋的下标，存在以下两种情况
  // 1. 小偷偷第 k 间房屋，则不能偷第 k-1 间房屋，最大偷窃金额是第 k 间房屋的金额加上 k-2 之前房屋的最大金额
  // 2. 小偷不偷第 k 间房屋，而偷第 k-1 间房屋，最大偷窃金额就是前 k-1 间房屋的最大金额
  // 因此得出动态转移方程：dp[i] = max(dp[i-2] + nums[i], dp[i-1])
  // 边界情况：
  // 1. 当房屋只有 1 间时，直接返回该房屋的金额
  // 2. 当 nums.length >= 2 时，dp[0] = nums[0]，dp[1] = Math.max(nums[0], nums[1])

  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp.pop()!;
}
// @lc code=end

console.log(rob([1, 2, 3, 1]), 4);
console.log(rob([2, 7, 9, 3, 1]), 12);

export {};
