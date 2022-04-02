/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
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
