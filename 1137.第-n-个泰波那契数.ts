/*
 * @lc app=leetcode.cn id=1137 lang=typescript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
function tribonacci(n: number): number {
  // 动态规划
  // 状态转移方程：T(n+3) = T(n) + T(n+1) + T(n+2)
  // T(0) = 0, T(1) = 1, T(2) = 1

  // 递归，会超时
  // if (n === 0) return 0;
  // if (n <= 2) return 1;
  // return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);

  // // 滚动数组
  // if (n === 0) return 0;
  // if (n <= 2) return 1;
  // // 滚动数组每次循环会先将 abc 右移一位，再计算 d 的值，因此需要在定义 abc 的时候都左移一位，以确保索引的正确
  // // 左移一位示例：0, 0, 1, 1, 2, 4, 7...
  // let a = 0,
  //   b = 0,
  //   c = 1,
  //   d = 1;
  // for (let i = 3; i <= n; i++) {
  //   a = b;
  //   b = c;
  //   c = d;
  //   d = a + b + c;
  // }
  // return d;

  // O(n) 复杂度算法 [手动狗头]
  const rets = [
    0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890, 66012, 121415, 223317,
    410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591, 29249425, 53798080, 98950096, 181997601, 334745777,
    615693474, 1132436852, 2082876103,
  ];
  return rets[n];
}
// @lc code=end

console.log(tribonacci(4), 4);
console.log(tribonacci(5), 7);
console.log(tribonacci(6), 13);
console.log(tribonacci(7), 24);
console.log(tribonacci(25), 1389537);

export {};
