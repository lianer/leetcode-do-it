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
  // 正序合并，因 nums1 中 [0 - m-1] 已有元素，需要借用一个新数组暂存排序好的元素，然后再拷贝回 nums1，空间复杂度 O(n)
  // 倒序合并，因 nums1 中 [m - m+n-1] 都是未使用到的元素（默认被填充为 0），而采用倒序合并的方式，即使 nums2 的最小值大于 nums1 的最大值，即 nums2 全部填充到 [m - m+n+1] 中，也不会覆盖到 [0 - m-1] 的元素，可以非常放心的修改 nums1

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

  // console.log(nums1);
}
// @lc code=end

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
merge([1], 1, [], 0); // [1]
merge([0], 0, [1], 1); // [1]

export {};
