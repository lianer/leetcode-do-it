/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.38%)
 * Likes:    2679
 * Dislikes: 0
 * Total Accepted:    520.9K
 * Total Submissions: 672.5K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const ret: string[] = [];
  const recursion = (s: string, leftBracket: number) => {
    // 边界情况 s.length = n * 2
    if (s.length === n * 2) return ret.push(s);
    // 递归情况
    if (leftBracket < n) recursion(s + '(', leftBracket + 1);
    if (leftBracket > s.length / 2) recursion(s + ')', leftBracket);
  };
  recursion('(', 1);
  return ret;
}
// @lc code=end

export {};

console.log(generateParenthesis(3), ['((()))', '(()())', '(())()', '()(())', '()()()']);
