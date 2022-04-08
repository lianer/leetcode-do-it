/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  // 贪心算法
  // 维护一个最长可到达的距离 rightmost
  // 遍历 nums，如果 i 小于等于 rightmost 即表示 i 可以到达
  // 也代表多了一种 i+nums[i] 的情况，取 rightmost 和 i+nums[i] 中较大者更新 rightmost
  // 如果 rightmost 大于等于 nums.length - 1，即表示可以跳转到数组的最后一个下标，返回 true
  let rightmost = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= rightmost) {
      rightmost = Math.max(rightmost, i + nums[i]);
      if (rightmost >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
}
// @lc code=end

console.log(canJump([0]), true);
console.log(canJump([2, 3, 1, 1, 4]), true);
console.log(canJump([3, 2, 1, 0, 4]), false);

export {};
