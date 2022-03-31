/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // 递增的数组，但可能存在负数，负数平方之后数组不再保持递增
  // 但由于负数的平方会得正数，负数越小，平方后的正数越大
  // 因此也，满足两头大中间小的规律
  // 可以通过双指针的方式，从两头逐步像中间移动，进行大小对比
  // 这种情况需要倒序的往数组中插值
  let l = 0,
    r = nums.length - 1,
    cur = r;
  const ret = new Array(nums.length); // 用 ret 记录当前指针位置，从大到小逆序插值到数组中
  while (cur >= 0) {
    if (nums[l] * nums[l] > nums[r] * nums[r]) {
      ret[cur] = nums[l] * nums[l];
      ++l;
    } else {
      ret[cur] = nums[r] * nums[r];
      --r;
    }
    --cur;
  }
  return ret;
}
// @lc code=end

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
