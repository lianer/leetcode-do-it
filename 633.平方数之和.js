/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a ** 2 <= c; a++) {
    const b = Math.sqrt(c - a ** 2);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;
};
// @lc code=end

console.log(judgeSquareSum(5), true);
console.log(judgeSquareSum(4), true);
console.log(judgeSquareSum(3), false);
console.log(judgeSquareSum(2), true);
console.log(judgeSquareSum(1), true);
