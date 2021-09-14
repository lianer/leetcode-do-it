/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 暴力法
// var find132pattern = function (nums) {
//   for (let j = 1; j < nums.length - 1; j++) {
//     let min = nums[0];
//     for (let i = 1; i < j; i++) {
//       if (min > nums[i]) min = nums[i];
//     }
//     for (let k = j + 1; k < nums.length; k++) {
//       if (nums[k] > min && nums[k] < nums[j]) return true;
//     }
//   }
//   return false;
// };

// 单调栈
var find132pattern = function (nums) {
  const stack = [nums[nums.length - 1]];
  const leftmin = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    leftmin[i] = Math.min(leftmin[i - 1], nums[i]);
  }
  for (let i = nums.length - 2; i >= 1; i--) {
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      stack.pop();
    }
    if (
      stack.length &&
      leftmin[i] < stack[stack.length - 1] &&
      stack[stack.length - 1] < nums[i]
    ) {
      return true;
    }
    stack.push(nums[i]);
  }
  return false;
};

console.log(find132pattern([3, 5, 2, 2, 4]), false);
console.log(find132pattern([1, 2, 3, 4]), false);
console.log(find132pattern([3, 1, 4, 2]), true);
console.log(find132pattern([-1, 3, 2, 0]), true);
console.log(find132pattern([0, 2, 1]), true);
console.log(find132pattern([0, 1, 0]), false);
