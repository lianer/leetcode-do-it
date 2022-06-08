/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (37.45%)
 * Likes:    1738
 * Dislikes: 0
 * Total Accepted:    316.1K
 * Total Submissions: 839.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 *
 *
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 *
 *
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 *
 *
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 *
 *
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 *
 * 必须 原地 修改，只允许使用额外常数空间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // 假设有排列 4, 5, 2, 6, 3, 1
  // 一眼就看出来是要把 2 换 3，并且后面从小到大排序，结果就是 4, 5, 3, 1, 2, 6
  // 由于排列是先动右边的数再动左边的数
  // 因此模拟一下思路
  // 1. 2 是从右往左第一个发生减小的数（升序），这表示右侧还有比 2 大的数
  // 2. 3 是从右往左第一个比 2 大的数
  // 3. 把 2 和 3 互换后，得到的是 4, 5, 3, 6, 2, 1，但 6, 2, 1 的排序不对
  // 4. 对 3 之后的数字进行升序排序（因为 3 是和 2 交换的，并且 3 右侧本来就是降序的）

  // 先找出被换的数
  let i = nums.length - 1;
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--;
  }
  i--;

  // 再找出要换的数，并交换它们
  // i = 0 的话就说明已经是一个完全降序排列的数组了，下一个排列就是升序，只需要对数组做反转即可
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  // 对剩余的数进行升序排列（剩余的数一定是降序的，因此只需要做反转）
  reverse(nums, i + 1);
}

function swap(nums: number[], i: number, j: number) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function reverse(nums: number[], start: number) {
  let left = start;
  let right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}
// @lc code=end

export {};

let a;
console.log(((a = [1, 2]), nextPermutation(a), a), [2, 1]);
console.log(((a = [1, 2, 3]), nextPermutation(a), a), [1, 3, 2]);
console.log(((a = [1, 5, 1]), nextPermutation(a), a), [5, 1, 1]);
console.log(((a = [1, 1]), nextPermutation(a), a), [1, 1]);
