/**
算法第 18 题-最长不含重复字符的子字
请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。

示例 1:
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串的长度，"pwke" 是一个子序列，不是子串。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s: string) {
  const map = new Map();
  let left = -1;
  let res = 0;
  for (let j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      left = Math.max(left, map.get(s[j]));
    }
    map.set(s[j], j);
    res = Math.max(res, j - left);
  }
  return res;
};

console.log(lengthOfLongestSubstring('abcabc'), 3);
console.log(lengthOfLongestSubstring('aa'), 1);
console.log(lengthOfLongestSubstring('abcdef'), 6);
