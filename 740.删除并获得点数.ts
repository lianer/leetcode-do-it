/*
 * @lc app=leetcode.cn id=740 lang=typescript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
function rob(cnt: number[]): number {
  if (cnt.length === 1) {
    return cnt[0];
  }

  const dp: number[] = [cnt[0], Math.max(cnt[0], cnt[1])];

  for (let i = 2; i < cnt.length; i++) {
    dp[i] = Math.max(dp[i - 2] + cnt[i], dp[i - 1]);
  }

  return dp.pop()!;
}

function deleteAndEarn(nums: number[]): number {
  // 注意这道题目有很多细节容易理解错误
  // 1. nums 数组是可以多次操作的，每次可以取出一个 nums[i]
  // 2. 取出 nums[i] 后就不能再取 nums[i] + 1 和 nums[i] - 1 的值了
  //    比如 nums[0] = 3，那 3+1 和 3-1 的值都不能取了
  // 思路：
  // 将题型转变一下，设 cnt 数组存储每种元素的总和，key 代表 nums 中的元素，value 代表每种元素的总和
  // 比如：nums = [1, 2, 2]，对应的 cnt = [0, 1, 4]
  // 由于题目要求，如果取出 nums[1] = 2，就不能取元素 1 和 3 了，转换到 cnt，就是指不能取相邻的元素
  // 不能取相邻的元素，解法就同题【198.打家劫舍】一致

  const max = nums.reduce((a, b) => (a > b ? a : b), 0);
  const cnt: number[] = new Array(max + 1).fill(0);
  nums.forEach((n) => {
    cnt[n] += n;
  });

  return rob(cnt);
}
// @lc code=end

console.log(deleteAndEarn([3, 4, 2]), 6);
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9);

export {};
