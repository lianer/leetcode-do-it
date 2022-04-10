/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  // 贪心算法
  // 在每一轮跳跃中，设当前位置为 i，最远可到达的下标为 end = i+nums[i]，
  // 你都可以在 [i - end] 范围内选择跳跃到哪个下标，从 [i - end] 中找出可以跳地最远的位置 maxPosition，
  // 当 i = end 时，进入下一轮循环，此时 i 右移了一步，end = maxPosition，在新的 [i - end] 中查找可以跳得最远的位置 maxPosition
  let cnt = 0;
  let end = 0;
  let maxPosition = 0;

  // 在遍历数组时，我们不访问最后一个元素，这是因为在访问最后一个元素之前，我们的边界一定大于等于最后一个位置，否则就无法跳到最后一个位置了。
  // 如果访问最后一个元素，在边界正好为最后一个位置的情况下，我们会增加一次「不必要的跳跃次数」，因此我们不必访问最后一个元素
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
      end = maxPosition;
      cnt++;
    }
  }

  return cnt;
}
// @lc code=end

console.log(jump([2, 3, 1, 1, 4]), 2);
console.log(jump([2, 3, 0, 1, 4]), 2);

export {};
