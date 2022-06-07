/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 设 chars 统计 s 中每个出现过的字符
  // 设指针 left 从左到右遍历 s
  // 设指针 right 从 left 开始往右遍历 s
  // 当 s[right] 重复出现或 right 越界时，结束 right 遍历
  // 若 s[right] 未重复出现，则将 s[right] 推入 chars，right 继续右移
  // right 遍历结束后，统计以 left 为起点最长的无重复子串的长度，并与最终答案 ans 进行对比，最后从 chars 中删除 s[left]
  const len = s.length;
  const chars = new Set();
  let ans = 0;
  let right = 0;
  for (let left = 0; left < len; left++) {
    while (!chars.has(s[right]) && right < len) {
      chars.add(s[right]);
      right++;
    }
    ans = Math.max(ans, right - left);
    chars.delete(s[left]);
  }
  return ans;
};
