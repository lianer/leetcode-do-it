/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start

function robRange2(nums: number[], start: number, end: number) {
  // [1, 2, 3, 1] start = 1
  // 当 start 从 1 开始时，dp[0] 为空，dp 位稀疏数组
  // 因为这里的 dp 是一个一位数组，每次循环只会用到 dp[i-1] 和 dp[i-2]，只需要用两个变量 a, b 代替它们即可
  const dp: number[] = [];
  dp[start] = nums[start];
  dp[start + 1] = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    console.log('i', i, dp[i - 2], nums[i], dp[i - 1]);

    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  console.log(dp);

  return dp.pop()!;
}

function robRange(nums: number[], start: number, end: number) {
  // [1, 2, 3, 1] start = 1
  // 当 start 从 1 开始时，dp[0] 为空，dp 位稀疏数组
  // 因为这里的 dp 是一个一位数组，每次循环只会用到 dp[i-1] 和 dp[i-2]，只需要用两个变量 a, b 代替它们即可
  let a = nums[start];
  let b = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    // dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    const tmp = Math.max(a + nums[i], b);
    a = b;
    b = tmp;
  }

  return b;
}

function rob(nums: number[]): number {
  // 动态规划
  // 相比于打家劫舍1，变化就是第一间房屋和最后一间房屋是相联的，不能同时偷第一间和最后一间房屋
  // 那如何表示没有同时偷第一间和最后一间呢？
  // 可以区分为不偷第一间和不偷第二间的情况来分别求值，然后取其大者
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 1, nums.length - 1), robRange(nums, 0, nums.length - 2));
}
// @lc code=end

console.log(rob([2, 3, 2]), 3);
console.log(rob([1, 2, 3, 1]), 4);
console.log(rob([1, 2, 3]), 3);

export {};
