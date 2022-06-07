/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 设 len = s.length - 1
  // 设 s[i] 为起始字符，遍历 s[0..len-1]
  // 设 chars 记录从 s[i] 开始出现过的字符
  // 设 s[j] 为结束字符，遍历 s[i..len-1]
  // 如果 s[j] 不存在于 chars，则添加至 chars，否则退出循环
  // 统计 chars 的长度

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const chars = new Set();
    for (let j = i; j < s.length; j++) {
      if (chars.has(s[j])) {
        break;
      } else {
        chars.add(s[j]);
      }
    }
    if (chars.size > ans) ans = chars.size;
  }

  return ans;
};
