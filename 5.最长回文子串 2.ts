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
  // 中心扩散
  // 从选取的一个点，或相邻的两个点开始从两边扩散查找回文子串，直至字符不相等则退出查找
  // 注意点：
  // 1. 如果是 aba 的形式，则 left 和 right 从同一个点开始
  // 2. 如果是 abba 的形式，则 right = left + 1
  // 3. 如果扩散到边界（left < 0 或 right > s.length - 1） 则退出查找
  // 4. 遍历 s 进行扩散查找时，每次都取 1 和 2 中的较大的结果

  if (s.length < 2) return s;

  let start = 0,
    maxLen = 1;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAround(s, i, i);
    const len2 = expandAround(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > maxLen) {
      start = i - Math.floor((len - 1) / 2);
      maxLen = len;
    }
  }

  return s.substring(start, start + maxLen);
}

function expandAround(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1; // 因为最后一次循环后 while 条件是不成立的，因此 right - left + 1 的结果需要 -2，就变成了 right - left - 1
}
// @lc code=end

export {};

console.log(longestPalindrome('babad'), 'bab');
console.log(longestPalindrome('cbbd'), 'bb');
console.log(longestPalindrome('a'), 'a');
console.log(longestPalindrome('bb'), 'bb');
