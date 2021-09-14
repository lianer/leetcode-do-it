/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLen = 1;
  let begin = 0;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      const j = L + i - 1;
      if (j >= len) {
        break;
      }

      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substr(begin, maxLen);
};
// @lc code=end

console.log(longestPalindrome('babad'), 'bab');
console.log(longestPalindrome('cbbd'), 'bb');
console.log(longestPalindrome('a'), 'a');
console.log(longestPalindrome('ac'), 'a');
