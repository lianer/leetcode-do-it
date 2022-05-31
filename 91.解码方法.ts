/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (31.86%)
 * Likes:    1182
 * Dislikes: 0
 * Total Accepted:    216.6K
 * Total Submissions: 672.3K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 *
 *
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 *
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：
 *
 *
 * "AAJF" ，将消息分组为 (1 1 10 6)
 * "KJF" ，将消息分组为 (11 10 6)
 *
 *
 * 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。
 *
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 *
 * 题目数据保证答案肯定是一个 32 位 的整数。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "12"
 * 输出：2
 * 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "226"
 * 输出：3
 * 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "0"
 * 输出：0
 * 解释：没有字符映射到以 0 开头的数字。
 * 含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
 * 由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 100
 * s 只包含数字，并且可能包含前导零。
 *
 *
 */

// @lc code=start
function numDecodings(s: string): number {
  // 数字 1-26 分别代表 A-Z，因此遍历 s 的过程中，每次可以截取 1 位数字，也可以截取 2 位数字，但截取 2 位数字时不一定满足条件（06、27 等）

  if (s[0] === '0') return 0;

  const n = s.length;
  const dp = new Array(n).fill(0);

  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    if (s[i] !== '0') {
      dp[i] = dp[i - 1];
    }
    if (s[i - 1] !== '0' && +s[i - 1] * 10 + +s[i] <= 26) {
      if (i > 1) {
        dp[i] += dp[i - 2]; // 当 i 和 i - 1 可以组合时，相当于在 i - 2 的基础上又多了一条支线，因此需要将 dp[i-1] 和 dp[i-2] 的情况相加
      } else {
        dp[i] += 1;
      }
    }
  }

  return dp[n - 1];
}
// @lc code=end

export {};

console.log(numDecodings('0'), 0);
console.log(numDecodings('102'), 1);
console.log(numDecodings('226'), 3);
console.log(numDecodings('227'), 2);
console.log(numDecodings('102203'), 1);
console.log(numDecodings('301'), 0);
