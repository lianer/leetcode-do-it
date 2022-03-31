/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  const right = nums.splice(nums.length - k);
  nums.splice(0, 0, ...right);
  // console.log(nums);
}
// @lc code=end

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5, 6, 7, 1, 2, 3, 4]
rotate([-1, -100, 3, 99], 2); // [3,99,-1,-100]
rotate([1, 2], 5); // [2, 1]
