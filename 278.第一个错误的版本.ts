/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // 二分法，从 mid 开始找，如果 mid 是 bad 则继续往前找，如果不是 bad 则继续往后找，直到 r 是 bad 且 r = 0 或 r - 1 不是 bad 时再返回
    let l = 1,
      r = n;

    // 循环直至区间左右端点相同
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid)) {
        r = mid; // 答案在区间 [left, mid] 中
      } else {
        l = mid + 1; // 答案在区间 [mid+1, right] 中
      }
    }

    return l;
  };
};
// @lc code=end

console.log(
  solution(function isBadVersion(n: number) {
    return n >= 5;
  })(5),
);
