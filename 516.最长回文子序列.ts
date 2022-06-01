/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 *
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/description/
 *
 * algorithms
 * Medium (66.14%)
 * Likes:    808
 * Dislikes: 0
 * Total Accepted:    125.6K
 * Total Submissions: 188.9K
 * Testcase Example:  '"bbbab"'
 *
 * 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 *
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  // 动态规划
  // 回文去掉首位还是回文，因此就有动态方程 dp[i][j] = dp[i+1][j-1] + 2
  // 边界条件：
  // dp[i][i] = 1
  // 若 s[i] = s[j] 则有 dp[i][j] = dp[i+1][j-1] + 2
  // 若 s[i] != s[j] 则有 dp[i][j] = Max(dp[i+1][j], dp[i][j-1])

  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

  // 由于长回文依赖于短的回文，因此要先从短的回文开始推导 dp
  // i 从 [len-1..0] 遍历，j 从 [i..len-1] 遍历，即可从短到长推导出完整的 dp
  for (let i = len - 1; i >= 0; i--) {
    // 因为单个字符一定是回文，因此有 dp[i][i] = 1，由于 i 是从 [len-1..0] 遍历的，而 j 是从 [i..len-1] 遍历的，因此在这里设置 dp[i][i] 是可以的
    dp[i][i] = 1;
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1];
}
// @lc code=end

console.log(longestPalindromeSubseq('bbbab'), 4);

export {};
