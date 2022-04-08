/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 *
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  // 哈希表
  // 设 ret 为返回的结果
  // 遍历 nums1，统计每个数字 n1 的出现次数 cnt1
  // 遍历 nums2，判断数字 n2 是否出存在于 cnt1 中并满足 cnt1[n2] > 0，如条件成立，则 cnt1[n]--，并将 n2 推入到结果 ret 中
  const ret: number[] = [];
  const cnt1 = new Map<number, number>();
  nums1.forEach((n1) => {
    cnt1.set(n1, (cnt1.get(n1) ?? 0) + 1);
  });
  nums2.forEach((n2) => {
    if ((cnt1.get(n2) ?? 0) > 0) {
      cnt1.set(n2, cnt1.get(n2)! - 1);
      ret.push(n2);
    }
  });
  return ret;
}
// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
console.log(intersect([1], [2]), []);
console.log(intersect([1], [1]), [1]);

export {};
