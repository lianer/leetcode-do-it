/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 设指针 left 和 right 对数组进行遍历，left 碰到非 0 元素 +1，right 每次都 +1
  // 直到不满足 right < nums.length 时退出循环
  // 遍历 [left - nums.length-1] 填充 0
  let left = 0;
  let right = 0;
  do {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  } while (right < nums.length);

  for (let i = left; i <= nums.length - 1; i++) {
    nums[i] = 0;
  }

  // console.log(nums);
}
// @lc code=end

moveZeroes([0, 1, 0, 3, 12]); // [0,1,0,3,12]
moveZeroes([0]); // [0]
