/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  const len1 = s1.length,
    len2 = s2.length;

  if (len1 > len2) {
    return false;
  }

  const codeA = 'a'.charCodeAt(0);

  // 拟 cnt1 统计字符串 s1 中每个字符的出现次数
  // 拟 cnt2 统计滑动窗口中每个字符的出现次数
  // 设 diff 为 cnt1 与 cnt2 的差集，符合 diff[x] = cnt1[x] - cnt2[x]
  const diff: number[] = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i].charCodeAt(0) - codeA;
    diff[ch]++;
  }

  // 设 diffCount 表示 diff[ch] 不为 0 的情况的个数
  let diffCount = diff.filter((c) => c !== 0).length;

  for (let i = 0; i < len2; i++) {
    const enter = s2[i].charCodeAt(0) - codeA;

    // 字符 enter 进入滑动窗口，如果 cnt2 中本来没有字符 enter，则 diffCount 需要 +1
    if (diff[enter] === 0) diffCount++;
    // 当一个字符 x(enter) 进入滑动窗口，公式 diff[x] = cnt1[x] - cnt2[x] 中 cnt2[x] +1，因此 diff[x] -1
    diff[enter]--;
    // 如果 diff[enter] 变为 0，则表示 cnt1[x] = cnt2[x]，即表示 cnt1 和 cnt2 中 x 的字符数是相同的，因此 diffCount 需要 -1
    if (diff[enter] === 0) diffCount--; //

    if (i + 1 > len1) {
      const leave = s2[i - len1].charCodeAt(0) - codeA;

      // 字符 leave 离开滑动窗口，逻辑同字符 enter 进入滑动窗口，反推即可
      if (diff[leave] === 0) diffCount++;
      diff[leave]++;
      if (diff[leave] === 0) diffCount--;
      // console.log('enter', s2[i], 'leave', s2[i - len1], diff);
    }

    // 当 cnt1 与 cnt2 没有差异时，表示 cnt1 与 cnt2 完全符合，s1 可以通过排列的方式得到当前滑动窗口中的字符子串，符合答案要求，因此返回 true
    if (diffCount === 0) {
      return true;
    }
  }

  return false;
}
// @lc code=end

console.log(checkInclusion('ab', 'eidbaooo'), true);
console.log(checkInclusion('ab', 'eidboaoo'), false);
console.log(checkInclusion('bc', 'abc'), true);
console.log(checkInclusion('a', 'ab'), true);
console.log(checkInclusion('ab', 'a'), true);

export {};
