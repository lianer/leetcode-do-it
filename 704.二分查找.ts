/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1; // mid 已经被用掉了，因此可以再进一位
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
// @lc code=end

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4);
