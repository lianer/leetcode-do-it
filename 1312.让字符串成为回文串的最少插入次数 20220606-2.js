/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  // 动态规划
  // 设 dp[i][j] 为 s[i..j] 要插入的最少字符数
  // 如果 s[i] = s[j]，则 dp[i][j] = dp[i + 1][j - 1]
  // 如果 s[i] != s[j]，那么可以选择在左边插入字符 s[j]，也可以在右边插入字符 s[i]，取插入字符数最少的那个，则 dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]) + 1
  // 因为 i 的值依赖于 i + 1，因此 i 从右往左遍历
  // 因为 j 的值依赖于 j - 1，因此 j 从左往右遍历

  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][s.length - 1];
};

console.log(minInsertions('leetcode'), 5);
console.log(minInsertions('mbadm'), 2);
console.log(minInsertions('zzazz'), 0);
