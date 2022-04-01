/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 双指针，倒序

  let p1 = m - 1;
  let p2 = n - 1;
  let cur = m + n - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      nums1[cur] = nums2[p2--];
    } else if (p2 === -1) {
      nums1[cur] = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      nums1[cur] = nums1[p1--];
    } else {
      nums1[cur] = nums2[p2--];
    }
    cur--;
  }

  console.log(nums1);
}
// @lc code=end

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
merge([1], 1, [], 0); // [1]
merge([0], 0, [1], 1); // [1]

export {};
