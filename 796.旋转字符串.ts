/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 *
 * https://leetcode-cn.com/problems/rotate-string/description/
 *
 * algorithms
 * Easy (54.95%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    51.5K
 * Total Submissions: 84K
 * Testcase Example:  '"abcde"\n"cdeab"'
 *
 * 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。
 *
 * s 的 旋转操作 就是将 s 最左边的字符移动到最右边。
 *
 *
 * 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcde", goal = "cdeab"
 * 输出: true
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "abcde", goal = "abced"
 * 输出: false
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, goal.length <= 100
 * s 和 goal 由小写英文字母组成
 *
 *
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;
  loopS: for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < goal.length; j++) {
      const _i = (i + j + s.length) % s.length;
      if (s[_i] !== goal[j]) {
        continue loopS;
      }
    }
    return true;
  }
  return false;
}
// @lc code=end

console.log(rotateString('abcde', 'cdeab'), true);
console.log(rotateString('abcde', 'abced'), false);
console.log(rotateString('a', 'a'), true);
console.log(rotateString('ab', 'a'), false);

export {};
