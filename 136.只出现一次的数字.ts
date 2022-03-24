/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// 异或运算有以下三个性质。
// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0= a。
// 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0。
// 异或运算满足交换律和结合律，即 a ^ b ^ a = b ^ a ^ a = b ^ (a ^ a) = b ^ 0 = b。

// @lc code=start
function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b);
}
// @lc code=end
