/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 *
 * https://leetcode-cn.com/problems/maximum-sum-circular-subarray/description/
 *
 * algorithms
 * Medium (36.61%)
 * Likes:    348
 * Dislikes: 0
 * Total Accepted:    37.8K
 * Total Submissions: 103K
 * Testcase Example:  '[1,-2,3,-2]'
 *
 * 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
 *
 * 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i]
 * 的前一个元素是 nums[(i - 1 + n) % n] 。
 *
 * 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j]
 * ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,-2,3,-2]
 * 输出：3
 * 解释：从子数组 [3] 得到最大和 3
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,-3,5]
 * 输出：10
 * 解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [3,-2,2,-3]
 * 输出：3
 * 解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4​​​​​​​
 *
 *
 */

// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
  // 环形最大子数组 = 数组总和 - 非环形最小子数组
  // 非环形最大子数组 = 数组总和 - 环形最小子数组  （这种情况不用考虑环形直接求最大子数组）
  // 简而言之，如果最大子数组是环形的，那么最小子数组必定不是环形的，如果最小子数组是环形的，那最大子数组必定不是环形的
  // 因此，在取最大子数组（不确定是不是环形的情况），要取{非环形最大子数组}和{数组总和 - 非环形最小子数组}的较大值
  // 即：Math.max(max, total - min)
  // 环形最大子数组案例：
  // [5, -3, 5] => 数组总和 7，非环形最小子数组 -3，非环形最大子数组 5，取[数组总和 - 最小子数组]，即 10
  // 环形最小子数组案例：
  // [-1, 4, -1] => 数组总和 2，非环形最小子数组 -1，非环形最大子数组 4，取[非环形最大子数组]，即 4
  // 特殊情况：最小子数组 = 数组本身，即数组元素全部都是负数
  // [-1, -1, -1] => 数组总和 -3，非环形最小子数组 -3，非环形最大子数组 -1，这类情况（非环形最大子数组 < 0 的情况），取[非环形最大子数组]，即 -1
  let preMax = 0,
    max = nums[0],
    preMin = 0,
    min = nums[0],
    total = 0;
  for (let i = 0; i < nums.length; i++) {
    preMax = Math.max(preMax + nums[i], nums[i]);
    max = Math.max(preMax, max);
    preMin = Math.min(preMin + nums[i], nums[i]);
    min = Math.min(preMin, min);
    total += nums[i];
  }

  if (max < 0) return max;
  return Math.max(max, total - min);
}
// @lc code=end

console.log(maxSubarraySumCircular([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSubarraySumCircular([1]), 1);
console.log(maxSubarraySumCircular([5, -3, 5]), 10);
console.log(maxSubarraySumCircular([5, -1, -1, 3, -2, -2, 5]), 11);
console.log(maxSubarraySumCircular([1, 1, 1]), 3);
console.log(maxSubarraySumCircular([-1, -1, -1]), -1);

export {};
