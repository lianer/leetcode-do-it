// 7. 整数反转
// https://leetcode-cn.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;
  while (x) {
    rev = rev * 10 + (x % 10);
    x = ~~(x / 10);
  }
  if (rev > Math.pow(2, 31) - 1 || rev < Math.pow(-2, 31)) return 0;
  return rev;
};

console.log(reverse(123));

console.log(reverse(-123));

console.log(reverse(1534236469));
