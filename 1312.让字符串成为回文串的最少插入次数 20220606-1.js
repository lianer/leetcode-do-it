/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  // 找出最长回文子序列 n，然后用 s.length - n 就是最少要添加的字符个数
  return s.length - getLongestSubseq(s);
};

var getLongestSubseq = function (s) {
  // 动态规划
  // 设 dp[i][j] 表示 s[i..j] 区间最大的回文数量
  // 当 s[i] = s[j]，有 dp[i][j] = dp[i + 1][j - 1] + 2
  // 当 s[i] != s[j]，有 dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
  // 由于 dp[i] 依赖于 dp[i + 1]，因此要从右往左遍历
  // 又有 dp[i][i] = 1，单个字符也算回文

  // 时间复杂度：O(n^2)
  // 空间复杂度：O(n^2)

  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};
