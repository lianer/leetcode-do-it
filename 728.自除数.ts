/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 */

// @lc code=start
function isSelfDivding(n: number): boolean {
  // 从个位开始遍历 n，每次遍历取出个位，并用 n 除以个位，如果结果不为 0 则表示不能被整除，n 不是自除数，如果结果为 0 则继续取 10 位
  // 设 cur 为
  let cur = n;
  while (cur > 0) {
    if (n % (cur % 10) !== 0) {
      return false;
    }
    cur = Math.floor(cur / 10);
  }
  return true;
}

function selfDividingNumbers(left: number, right: number): number[] {
  // 定义 isSelfDivding 函数，接收一个入参 n，返回 boolean，用于判断一个数是否是自除数
  // 遍历 [left - right]，过滤出自除数
  const ret: number[] = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDivding(i)) {
      ret.push(i);
    }
  }
  return ret;
}
// @lc code=end

console.log(selfDividingNumbers(1, 22), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
