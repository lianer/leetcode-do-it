function canJump(nums: number[]): boolean {
  // 贪心算法
  let max = 0;
  let cur = 0;

  while (cur <= max) {
    max = Math.max(max, cur + nums[cur]);
    cur++;

    if (max >= nums.length - 1) {
      return true;
    }
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4]), true);
console.log(canJump([3, 2, 1, 0, 4]), false);

export {};
