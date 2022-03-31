/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // 双指针
  // 设 left right 两个索引变量，left 从 0 开始右移，right 从 numbers.length-1 开始左移
  // 若 numbers[left]+numbers[right] 等于 target 则返回 [left, right]
  // 若大于 target，则 right 左移
  // 若小于 target，则 left 右移
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      // 题目设定下标从 1 开始，因此返回的结果 +1
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [0, 0];
}
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9), [1, 2]);

export {};
