/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 *
 * https://leetcode-cn.com/problems/word-break/description/
 *
 * algorithms
 * Medium (52.62%)
 * Likes:    1584
 * Dislikes: 0
 * Total Accepted:    291.3K
 * Total Submissions: 549.6K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 *
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 *
 *
 * 示例 2：
 *
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
 * 注意，你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s 和 wordDict[i] 仅有小写英文字母组成
 * wordDict 中的所有字符串 互不相同
 *
 *
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // 动态规划，背包算法
  // 把 s 的所有子串列举出来
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp: boolean[] = new Array(len + 1).fill(false); // len+1 是因为循环是从 1 开始，到 len 结束的，包含 len；默认填充 false 是因为后面只对 true 的情况进行覆盖

  dp[0] = true;

  // 由于 substring 的特点，需要截取 [start - end] 的字符串，这里 i 代表 end，j 代表 start
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.substring(j, i); // 使用 i,j 双层循环，word 列举了 s 的所有子串
      if (dp[j] && wordSet.has(word)) {
        // dp[0-j]可能会有多个 true 的情况，但根据背包的原则，我们只需要确保 dp[j] 满足的情况下 [j-i] 的子串存在于 wordDict 即可
        dp[i] = true;
        break;
      }
    }
  }

  return dp[len];
}
// @lc code=end

// console.log(wordBreak('leetcode', ['leet', 'code']), true);
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']), false);

export {};
