/*
 * @lc app=leetcode.cn id=1567 lang=typescript
 *
 * [1567] 乘积为正数的最长子数组长度
 *
 * https://leetcode-cn.com/problems/maximum-length-of-subarray-with-positive-product/description/
 *
 * algorithms
 * Medium (41.88%)
 * Likes:    153
 * Dislikes: 0
 * Total Accepted:    25.6K
 * Total Submissions: 60.8K
 * Testcase Example:  '[1,-2,-3,4]'
 *
 * 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。
 *
 * 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。
 *
 * 请你返回乘积为正数的最长子数组长度。
 *
 *
 *
 * 示例  1：
 *
 *
 * 输入：nums = [1,-2,-3,4]
 * 输出：4
 * 解释：数组本身乘积就是正数，值为 24 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,-2,-3,-4]
 * 输出：3
 * 解释：最长乘积为正数的子数组为 [1,-2,-3] ，乘积为 6 。
 * 注意，我们不能把 0 也包括到子数组中，因为这样乘积为 0 ，不是正数。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [-1,-2,-3,0,1]
 * 输出：2
 * 解释：乘积为正数的最长子数组是 [-1,-2] 或者 [-2,-3] 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 */

// @lc code=start
function getMaxLen(nums: number[]): number {
  // 动态规划

  if (nums.length === 0) {
    return 0;
  }

  const positive: number[] = [nums[0] > 0 ? 1 : 0]; // 记录正数的个数
  const negative: number[] = [nums[0] < 0 ? 1 : 0]; // 记录负数的个数
  let max = nums[0] > 0 ? 1 : 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive[i] = positive[i - 1] + 1; // 正数不影响乘积正负性，positive 和 negative 各 +1
      if (negative[i - 1] !== 0) {
        negative[i] = negative[i - 1] + 1; // 因当前数是正数，如果上一位数是 0，则负数的个数不应该 +1
      } else {
        negative[i] = 0;
      }
    } else if (nums[i] < 0) {
      negative[i] = positive[i - 1] + 1; // 当前数为负数，则乘积的正负性会发生互换，因此需将 positive 与 negative 互换
      if (negative[i - 1] !== 0) {
        positive[i] = negative[i - 1] + 1; // 同样的，因为当前是负数，如果上一位数是 0，则正数的个数不应该 +1
      } else {
        positive[i] = 0;
      }
    } else {
      positive[i] = negative[i] = 0; // 当前述为 0 时，positive 和 negative 都重置为 0
    }

    max = Math.max(max, positive[i]); // 取最大值
  }

  return max;
}
// @lc code=end

// console.log(getMaxLen([1, -2, -3, 4]), 4);
// console.log(getMaxLen([0, 1, -2, -3, -4]), 3);
// console.log(getMaxLen([-1, -2, -3, 0, 1]), 2);
console.log(getMaxLen([1000000000]), 1);
