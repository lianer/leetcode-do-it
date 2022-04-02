/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start

// 暴力法，O(n^2)
// 双层循环
// 设第一层循环从 i=0 开始，到 nums.length - 2
// 设第二层循环，从 j=i+1 开始，到 nums.length -1，因为加法存在交换律，即 a + b = b + a，因此 j 无需从 0 开始遍历
function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function twoSum2(nums: number[], target: number): number[] {
  // 排序 + 双指针，废弃（需要返回下标，排序后下标都错乱了），O(n^log(n))
  // 对 nums 进行排序，形成单调递增数组
  // 设 left = 0，right = nums.length - 1 分别从 nums 的两端开始遍历
  // 当 nums[left] + nums[right] = target 时，返回 [left, right]
  // 当 nums[left] + nums[right] > target 时，right 左移
  // 当 nums[left] + nums[right] = target 时，left 右移
  nums = nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
  // 哈希表（废弃，nums 存在重复的元素），时间复杂度 O(n)，空间复杂度 O(n)
  // 设哈希表 map<number, number>，key 表示 nums 的元素，value 表示元素的下标
  // 遍历 nums ，判断 target-nums[i] 是否存在于哈希表中，若存在，则返回 [i, map.get(target-nums[i])]，若不存在，则将该元素添加到哈希表
  // 注意返回的 [n, m] 中 n 和 m 不能同时指向同一个元素
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i])!, i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
console.log(twoSum([2, 5, 5, 11], 10), [1, 2]);

export {};
