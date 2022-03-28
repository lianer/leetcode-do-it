/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1,
    ans = nums.length;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target <= nums[mid]) {
      ans = mid; // 暂时设 ans = mid，题目要求是返回 target 的位置或 target 该插入的位置，如果 while 执行到最后，没有更加符合 target <= nums[mid] 条件的情况出现，则当前 ans 即为最匹配的结果
      r = mid - 1; // target 在区间 [l - mid] 内
    } else {
      l = mid + 1; // target 在区间 [mid+1 - r] 内
    }
  }
  return l;
}
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);
