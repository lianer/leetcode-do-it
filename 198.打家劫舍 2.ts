function rob(nums: number[]): number {
  // f(n) = Max(f(n-1), f(n-2)+nums[n])

  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let a = nums[0],
    b = Math.max(nums[0], nums[1]),
    max = 0;
  for (let i = 2; i < nums.length; i++) {
    max = Math.max(b, a + nums[i]);
    a = b;
    b = max;
  }
  return max;
}

console.log(rob([1]), 1);
console.log(rob([1, 2]), 2);
console.log(rob([1, 2, 3, 1]), 4);
console.log(rob([2, 7, 9, 3, 1]), 12);
console.log(rob([2, 1, 1, 2]), 4);

export {};
