/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // 动态规划
  // 可以删除字符，等同于动态规划不用考虑 dp[i + 1][j - 1] 不是回文的情况
  // dp[i][j] 表示字符串 s[i..j] 所需删减的字符数

  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1];
};
