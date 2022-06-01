/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.58%)
 * Likes:    418
 * Dislikes: 0
 * Total Accepted:    125.6K
 * Total Submissions: 226K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
 *
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入:s = "abccccdd"
 * 输出:7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 * 示例 2:
 *
 *
 * 输入:s = "a"
 * 输入:1
 *
 *
 * 示例 3:
 *
 *
 * 输入:s = "bb"
 * 输入: 2
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 2000
 * s 只能由小写和/或大写英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): number {
  // 贪心算法
  // 回文分奇偶性，有 aba 和 abba 两种
  // 要用所给字符构成最长回文，那只考虑 aba 的形式，只需要统计每个字符出现的次数，出现偶数次的直接可以加到回文串中，如果出现奇数次的，则取一个放中间

  const cnt: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    cnt[s[i]] = (cnt[s[i]] ?? 0) + 1;
  }

  let ans = 0;
  Object.values(cnt).forEach((num) => {
    ans += Math.floor(num / 2) * 2;
    if (num % 2 === 1 && ans % 2 === 0) {
      ans++;
    }
  });

  return ans;
}
// @lc code=end

console.log(longestPalindrome('abccccdd'), 7);

export {};
