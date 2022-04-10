function jump(nums: number[]): number {
  // 贪心算法
  if (nums.length === 1) return 0;

  let max = 0;
  let end = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);

    // 每当 i 达到上一次 end 的时候，就重新将当前的 max 赋值给 end，并记一次跳跃计数
    if (i === end) {
      if (end !== nums.length - 1) {
        cnt++;
      }
      end = max;
    }
  }

  return cnt;
}

console.log(jump([1]), 0);
console.log(jump([2, 3, 1, 1]), 2);
console.log(jump([2, 3, 0, 1, 4]), 2);
console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]), 3);

export {};
