function deleteAndEarn(nums: number[]): number {
  // 思路：将 nums[i] 转换为新数组 arr 的下标，遍历 arr，然后套用打家劫舍的逻辑
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = max > nums[i] ? max : nums[i];
  }

  const arr = new Array(max + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] += nums[i];
  }

  // f(n) = Max(f(n-1), f(n-2) + arr[n])
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < arr.length; i++) {
    c = Math.max(b, a + arr[i]);
    a = b;
    b = c;
  }

  return c;
}

console.log(deleteAndEarn([3, 4, 2]), 6);
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]), 9);

export {};
