/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 优化版本
  const len = s.length;
  const chars = new Set();
  let ans = 0;
  let right = 0;

  for (let left = 0; left < len; left++) {
    // 如果字符不重复，则记录到 chars，并移动右指针
    while (!chars.has(s[right]) && right < len) {
      chars.add(s[right]);
      right++;
    }

    // 记录最大值
    ans = Math.max(ans, right - left);

    // 右指针遇到重复结束 while 循环后，左指针就要右移，如果下一个 while 依然无法进去，则左指针继续右移，直到删除重复的左指针
    chars.delete(s[left]);
  }

  return ans;
};
