/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1,
    ans = nums.length;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target <= nums[mid]) {
      ans = mid; // 暂时设 ans = mid，题目要求是返回 target 的位置或 target 该插入的位置，如果 while 执行到最后，没有更加符合 target <= nums[mid] 条件的情况出现，则当前 ans 即为最匹配的结果
      r = mid - 1; // target 在区间 [l - mid] 内
    } else {
      l = mid + 1; // target 在区间 [mid+1 - r] 内
    }
  }
  return l;
}

// 微调一下写法，免去 ans 变量，直接用 r 返回
function searchInsert2(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  // 在使用 r 作返回值的情况，需要处理边界情况，即 target 是大于 nums[r] 的情况
  if (target > nums[r]) {
    return r + 1;
  }

  while (l < r) {
    const mid = Math.floor((l + r) / 2); // 因为始终满足条件 l < r，因此在取中的过程中，mid 一定会变小，最后形成 1 < 2 的局面
    if (target <= nums[mid]) {
      r = mid; // 答案在区间 [l - mid] 之间，mid 之所以不 -1，是为了让 r 作为返回值，可以免去多加一个 ans 变量
    } else {
      l = mid + 1; // 答案在区间 [mid+1 - r] 之间
    }
  }
  return r;
}

// @lc code=end

console.log('searchInsert:');
console.log(searchInsert([1, 3, 5, 6], 5), 2);
console.log(searchInsert([1, 3, 5, 6], 2), 1);
console.log(searchInsert([1, 3, 5, 6], 7), 4);

console.log('searchInsert2:');
console.log(searchInsert2([1, 3, 5, 6], 5), 2);
console.log(searchInsert2([1, 3, 5, 6], 2), 1);
console.log(searchInsert2([1, 3, 5, 6], 7), 4);
