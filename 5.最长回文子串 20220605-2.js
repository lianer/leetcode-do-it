/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 中心扩散
  // 分别取一个点和两个点，从中间开始往两边扩散

  let ret = '';

  for (let i = 0; i < s.length; i++) {
    const r1 = findPalindrome(s, i, i);
    const r2 = findPalindrome(s, i, i + 1);
    const max = r1.length > r2.length ? r1 : r2;
    ret = max.length > ret.length ? max : ret;
  }

  return ret;
};

var findPalindrome = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
};
