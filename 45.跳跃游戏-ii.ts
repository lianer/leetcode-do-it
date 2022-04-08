/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  // 相比于 55 题，这里要求的是最少跳到最后的跳跃数
  // 思考：设 nums 的长度为 len，正序只能论证能否跳转到 len-1，如果想要求最小跳跃数，可以尝试一下倒序
  // 即能跳转到 len-1 的有哪些结果？假设 nums = [5, 4, 3, 2, 1, 0]，能跳转到 0 的有 5、4、3、2、1，但 5 跳转的最远，5 的步长最长
  // 设总跳跃次数为 cnt = 0，设 len = nums.length，设当前位置为 cur，遍历 [0 - cur-1]，查找可以到达 cur 的最小的 i，即 i + nums[i] >= cur
  // 找到可以达到 cur 的最小的 i 之后，将 cnt +1，并更新 cur 为 i 的下标，中止遍历，进入下一次查找可以达到 cur 的最小的 i
  // 边界情况：当不符合 cur > 0 时退出循环，并返回 cnt
  let cnt = 0;
  const len = nums.length;
  let cur = len - 1;

  while (cur > 0) {
    for (let i = 0; i < cur; i++) {
      if (i + nums[i] >= cur) {
        // console.log(i, nums[i], cur);
        cur = i;
        cnt++;
        break;
      }
    }
  }

  return cnt;
}
// @lc code=end

console.log(jump([2, 3, 1, 1, 4]), 2);
console.log(jump([2, 3, 0, 1, 4]), 2);

export {};
