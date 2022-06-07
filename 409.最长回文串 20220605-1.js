/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // 统计字符个数，偶数部分累计起来，奇数部分只算一次，构建最佳的回文情况 aabaa

  const cnt = new Map();

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    cnt.set(ch, (cnt.get(ch) || 0) + 1);
  }

  let ret = 0;
  for (let n of cnt.values()) {
    ret += Math.floor(n / 2) * 2;
    if (n % 2 === 1 && ret % 2 === 0) {
      ret++;
    }
  }

  return ret;
};
