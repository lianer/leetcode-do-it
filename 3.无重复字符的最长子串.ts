/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
  // 输入: s = "abcabcbb"
  // 输出: 3
  // 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3

  // 滑动窗口 + 哈希集合
  // 设 left 为子串的起始位置，向右移
  // 设 right 为子串的结束位置，也向右移
  // 设 set 集合用于记录出现过的单词
  // 遍历字符串，当 right 到达 s.length 时退出循环
  // 当出现一个新的字符时，right 右移，并向 set 中添加该字符
  // 当字符已存在于 set 中，则 left 右移，并从 set 中移除第 left 个字符
  // 设 max 记录最长的字符串长度，每次循环都对比 max 和 set.size，并更新 max 的值
  let left = 0,
    right = 0,
    max = 0;
  const set = new Set<string>();

  while (right < s.length) {
    const ch = s[right];

    // console.log(ch, set.has(ch) ? 'left' : 'right');

    if (set.has(ch)) {
      set.delete(s[left]);
      max = Math.max(max, set.size);
      left++;
    } else {
      set.add(ch);
      max = Math.max(max, right - left + 1);
      right++;
    }
  }

  return max;
}
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);

export {};
