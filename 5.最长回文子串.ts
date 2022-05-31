/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.36%)
 * Likes:    5275
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.9M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): string {
  // 动态规划
  // 当 s[i] = s[j] 时，P(i,j)=P(i+1,j−1)
  // 边界情况
  // 一个字符始终有 P(i,i) = true
  // 如果相邻的两个字符有 s[i] = s[i+1]，则有 P(i,i+1) = true

  if (s.length < 2) return s;

  // 设 maxLen 和 begin 记录最长回文子串的长度和开始位置
  const len = s.length;
  let maxLen = 1,
    begin = 0;

  // 设 dp[i][j] 表示子串 s[i-j] 是否是回文
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
    dp[i][i] = true; // 一个字符 s[i] 一定是回文
  }

  // 设 n 为子串长度，从长度 2 开始递推
  for (let n = 2; n <= len; n++) {
    // 遍历字符串，查找符合 n 个长度的回文子串
    for (let i = 0; i < len; i++) {
      const j = i + n - 1;

      if (j >= len) break;

      if (s[i] !== s[j]) {
        // 如果 s[i] !== s[j]，则 s[i..j] 子串无法构成回文
        dp[i][j] = false;
      } else {
        // 兼容 n = 2 的情况，不存在 dp[i + 1][j - 1]
        if (n === 2) {
          dp[i][j] = true;
        } else {
          // 当前 s[i] === s[j]，则 s[i..j] 子串是否回文取决于 s[i+1..j-1] 是否回文，而 s[i+1..j-1] 是否回文在上一次外层循环中已经得到求证了
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 只要 dp[i][j] 构成回文子串，则进行记录和比对
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
}
// @lc code=end

export {};

console.log(longestPalindrome('babad'), 'bab');
console.log(longestPalindrome('cbbd'), 'bb');
console.log(longestPalindrome('a'), 'a');
console.log(longestPalindrome('bb'), 'bb');
