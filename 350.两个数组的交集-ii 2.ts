/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 *
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  // 排序 + 双指针（如果题目说明是已排序的，那么双指针是最好的方案）
  // 对 nums1 和 nums2 原地排序，递增
  // 设 p1 和 p2 分别作为 nums1 和 nums2 的指针
  // 设 ret 为返回的结果
  // 有以下情况：
  // 当 nums1[p1] < nums2[p2]，则 p1++
  // 当 nums1[p1] > nums2[p2]，则 p2++
  // 当 nums1[p1] = nums2[p2]，则 p1++ 且 p2++
  // 当 p1 > nums1.length-1 或 p2 > nums2.length-1 时结束循环，返回 ret
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let p1 = 0,
    p2 = 0,
    ret = [];
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      ret.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return ret;
}
// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
console.log(intersect([1], [2]), []);
console.log(intersect([1], [1]), [1]);

export {};
