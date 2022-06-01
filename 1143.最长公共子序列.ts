/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode-cn.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (64.14%)
 * Likes:    1006
 * Dislikes: 0
 * Total Accepted:    240.3K
 * Total Submissions: 373.4K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 *
 * 一个字符串的 子序列
 * 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 *
 *
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 *
 *
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * text1 和 text2 仅由小写英文字符组成。
 *
 *
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  // 动态规划
  // 因为是对比两个字符公共的子序列，因此需要用二维数组 dp[i][j] 来描述公共子序列的所有情况
  // 动态方程式：
  // 当 t1 = t2 时，有 dp[i][j] = dp[i-1][j-1] + 1
  // 当 t1 != t2 时，有 dp[i][j] = Max(dp[i-1][j], dp[i][j-1])
  // 边界情况：
  // 当 i = 0 或 j = 0 的时候，并且：
  // t1[0] = t2[0]，则有 dp[i][j] = 1，否则 dp[i][j] = 0
  // t1[0] != t2[0]，则有 dp[i][j] = Max(dp[i-1]?.[j] || 0, dp[i][j-1] || 0)
  const dp = new Array(text1.length).fill(0).map(() => new Array(text2.length).fill(0));
  for (let i = 0; i < text1.length; i++) {
    const t1 = text1[i];
    for (let j = 0; j < text2.length; j++) {
      const t2 = text2[j];
      if (t1 === t2) {
        dp[i][j] = (dp[i - 1]?.[j - 1] ?? 0) + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1]?.[j] ?? 0, dp[i][j - 1] ?? 0);
      }
    }
  }

  return dp[text1.length - 1][text2.length - 1];
}
// @lc code=end

console.log(longestCommonSubsequence('abcde', 'ace'), 3);
console.log(longestCommonSubsequence('abc', 'abc'), 3);
console.log(longestCommonSubsequence('abc', 'def'), 0);

export {};
