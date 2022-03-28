/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

/**
 * 假设 n = 10    二进制 1010
 * n >> 1 得到 101
 * 1010 ^ 101 得到 1111
 * 1111 & 10000 得到 0
 *
 * 假设 n = 11    二进制 1011
 * n >> 1 得到 101
 * 1011 ^ 101 得到 1110
 * 1110 & 1111 得到 1110
 */

// @lc code=start

// 解法一：位运算
// function hasAlternatingBits(n: number): boolean {
//   const a = n ^ (n >> 1);
//   return (a & (a + 1)) === 0;
// }

// 解法二：一位一位取出来对比
function hasAlternatingBits(n: number): boolean {
  let prev = -1;
  while (n != 0) {
    const cur = n % 2;
    if (cur === prev) {
      return false;
    }
    prev = cur;
    n = Math.floor(n / 2);
  }
  return true;
}

// @lc code=end
