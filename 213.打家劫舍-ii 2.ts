function robRange(nums: number[], start: number, end: number): number {
  // f(n) = Max(f(n-1), f(n-2)+nums[n])
  let a = 0,
    b = 0,
    max = 0;

  for (let i = start; i <= end; i++) {
    max = Math.max(b, a + nums[i]);
    a = b;
    b = max;
  }

  return max;
}

function rob(nums: number[]): number {
  // 分为“偷最后一间”和“不偷最后一间”两种情况考虑
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  return Math.max(robRange(nums, 1, nums.length - 1), robRange(nums, 0, nums.length - 2));
}

console.log(rob([2, 3, 2]), 3);
console.log(rob([1, 2, 3, 1]), 4);
console.log(rob([1, 2, 3]), 3);

export {};
