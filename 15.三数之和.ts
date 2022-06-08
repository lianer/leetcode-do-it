/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.89%)
 * Likes:    4848
 * Dislikes: 0
 * Total Accepted:    997.5K
 * Total Submissions: 2.8M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  // 排序 + 双指针
  // 时间复杂度：O(n^2)

  const ret: number[][] = [];

  nums = nums.sort((a, b) => a - b); // O(nlogn)

  // console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    // 双指针，求 nums[left] + nums[right] + n = 0
    // 如果大于 0，则 right--
    // 如果小于 0，则 left++
    // 如果不满足 left < right 退出循环
    // 如果 nums[i] = nums[i - 1] 则也跳过，这种情况结果是一样的
    // 如果第一个数大于零，那么后面的数是升序的，不可能出现三数之和为零的情况

    if (nums[i] > 0) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const n = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue;
      }
      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      const sum = n + nums[left] + nums[right];

      // console.log(`sum: ${sum}, n: ${n}, left: ${nums[left]}, right: ${nums[right]}`);

      if (sum === 0) {
        ret.push([n, nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ret;
}
// @lc code=end

export {};

console.log(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);
console.log(threeSum([]), []);
console.log(threeSum([0]), []);
console.log(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
console.log(threeSum([-1, 0, 1, 2, -1, -4]), [
  [-1, -1, 2],
  [-1, 0, 1],
]);
console.log(threeSum([-2, 0, 0, 2, 2]), [[-2, 0, 2]]);
