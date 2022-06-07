/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 动态规划
  // 把问题拆解，分别求子串长度为 1,2,3...n 的情况
  // 其中 n 为子串的长度，从 2 到 s.length
  // 用 dp[i][j] 表示子串的左右索引，用 boolean 值表示子串是否是回文

  const len = s.length;

  if (len < 2) return s;

  const dp = new Array(len).fill(0).map((item) => new Array(len).fill(false));
  let start = 0;
  let end = 0;

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let n = 2; n <= len; n++) {
    for (i = 0; i < len; i++) {
      const j = i + n - 1;
      if (s[i] === s[j]) {
        if (n === 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
        if (dp[i][j] && j - i > end - start) {
          start = i;
          end = j;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return s.substring(start, end + 1);
};
