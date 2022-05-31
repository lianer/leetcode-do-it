/*
 * @lc app=leetcode.cn id=413 lang=typescript
 *
 * [413] 等差数列划分
 *
 * https://leetcode-cn.com/problems/arithmetic-slices/description/
 *
 * algorithms
 * Medium (69.24%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    98K
 * Total Submissions: 141.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。
 *
 *
 * 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
 *
 *
 *
 *
 * 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。
 *
 * 子数组 是数组中的一个连续序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,4]
 * 输出：3
 * 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1]
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -1000
 *
 *
 *
 *
 */

// @lc code=start
function numberOfArithmeticSlices(nums: number[]): number {
  // 设等差数 d = nums[1] - nums[0]
  // 从 i = 2 开始遍历，如果 nums[i] - nums[i - 1] = d 则有等差数个数 t++
  // 设 ans 为总的等差数的总和，如果等差数个数 +1，则 ans 会多出 t 种组合情况
  // 如果 nums[i] - nums[i - 1] != d，则另 t = 1

  if (nums.length < 3) return 0;

  let d = nums[1] - nums[0];
  let t = 0;
  let ans = 0;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === d) {
      t++;
    } else {
      t = 0;
      d = nums[i] - nums[i - 1];
    }

    ans += t;
  }

  return ans;
}
// @lc code=end

export {};

console.log(numberOfArithmeticSlices([1]), 0);
console.log(numberOfArithmeticSlices([1, 2, 3, 4]), 3);
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5]), 6);
