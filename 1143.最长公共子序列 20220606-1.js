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
function longestCommonSubsequence(text1, text2) {
  // 动态规划
  // 用 dp[i][j] 表示 text1[i] 和 text2[j] 拥有的最长的公共子序列
  // 子序列的题可以删除字符，等同于可以忽略一些字符，也就可以用标准的动态规划进行求值
  // 如果 text1[i] != text2[j] 则 dp[i][j] = Max(dp[i - 1][j], dp[i][j - 1]) （因为涉及到两个字符串，因此取 text1 减一位或 text2 减一位的较大者）
  // 如果 text1[i] = text2[j] 则 dp[i][j] = dp[i - 1][j - 1] + 1

  const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

  for (let i = 1; i < text1.length + 1; i++) {
    for (let j = 1; j < text2.length + 1; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // i, j 可能为 0，为了方便处理边界情况，i, j 从 1 开始，并在取字符的时候各 -1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
}
// @lc code=end

console.log(longestCommonSubsequence('abcde', 'ace'), 3);
console.log(longestCommonSubsequence('abc', 'abc'), 3);
console.log(longestCommonSubsequence('abc', 'def'), 0);
console.log(longestCommonSubsequence('bl', 'yby'), 1);
console.log(longestCommonSubsequence('ab', 'ba'), 1);
