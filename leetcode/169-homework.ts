/*
169. 多数元素

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:
输入: [3,2,3]
输出: 3

示例 2:
输入: [2,2,1,1,1,2,2]
输出: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(arr: number[]) {
  arr.sort((a, b) => a - b); // nlogn ~ n^2 > n
  return arr[arr.length >> 1];
};

console.log('结果', '预期');
console.log(majorityElement([2]), 2);
console.log(majorityElement([2, 3, 2]), 2);
console.log(majorityElement([1, 1, 2, 2, 2]), 2);
console.log(majorityElement([2, 2, 2, 1, 1]), 2);
console.log(majorityElement([2, 2, 2, 1, 1, 3]), 2);
console.log(majorityElement([1, 1, 3, 2, 2, 2]), 2);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
console.log(majorityElement([1, 2, 1, 2, 1, 2, 2]), 2);

export { majorityElement };
