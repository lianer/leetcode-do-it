function quickSort(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }
  const pivot = nums[0];
  const less = [],
    greater = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      greater.push(nums[i]);
    } else {
      less.push(nums[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([3, 2, 5, 1, 4]));

export {};
