/*
 * @lc app=leetcode.cn id=1312 lang=typescript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 *
 * https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/
 *
 * algorithms
 * Hard (67.72%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    15.7K
 * Total Submissions: 23.1K
 * Testcase Example:  '"zzazz"'
 *
 * 给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。
 *
 * 请你返回让 s 成为回文串的 最少操作次数 。
 *
 * 「回文串」是正读和反读都相同的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "zzazz"
 * 输出：0
 * 解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "mbadm"
 * 输出：2
 * 解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "leetcode"
 * 输出：5
 * 解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 500
 * s 中所有字符都是小写字母。
 *
 *
 */

// @lc code=start
function minInsertions(s: string): number {
  // 等同于求最长回文子序列 max，然后 s.length - max 得到的就是最少插入的操作次数
  return s.length - maxSubseq(s);
}

function maxSubseq(s: string) {
  // 1. 如果一个字符串 s[i..j] 是回文，那么一定有 s[i+1..j-1] 也是回文
  // 2. 用 dp[i][j] 表示子串 s[i..j]，那么就有基本的动态规划推导方程：dp[i][j] = dp[i+1][j-1] + 2
  // 3. 如果存在 s[i] = s[j]，那么一定就符合：dp[i][j] = dp[i+1][j-1] + 2
  // 4. 如不 s[i] != s[j]，那么就符合：dp[i][j] = Max(dp[i+1][j], dp[i][j-1])
  // 5. 并且 dp[i][i] = 1
  // 6. dp[0][s.length-1] 就是最终结果
  // 7. 遍历 i 和 j 需要满足从小范围到大范围的原则，以保证动态规划推导方程成立，由于 i 的值取决于 i+1，因此 i 要从大到小遍历，而 j 要从小到大遍历
  // 8. 又因为 0 <= i <= j <= s.length-1，因此 j 只需要遍历 [i..s.length-1] 即可

  const len = s.length;
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1;
    let c1 = s[i];
    for (let j = i + 1; j < len; j++) {
      let c2 = s[j];
      if (c1 === c2) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][len - 1];
}
// @lc code=end

console.log(minInsertions('leetcode'), 5);
console.log(minInsertions('mbadm'), 2);
console.log(minInsertions('zzazz'), 0);

export {};
