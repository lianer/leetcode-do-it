/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  // s1 的排列是 s2 的子串
  // s1 的排列有多种排法
  // 将 s1 字符串拆解，设 cnt1 统计每个字符出现的出现次数
  // 设 len1 为 s1 的长度，设 len2 为 s2 的长度
  // 维护一个滑动窗口，设 cnt2 统计滑动窗口中每个字符的出现次数，滑动窗口的长度固定为 len1，每次移动滑动窗口时都更新 cnt2，并与 cnt1 进行对比
  // 1. 当滑动窗口右移时，进入滑动窗口的元素要添加(+1)到 cnt2 中，离开滑动窗口的元素要从 cnt2 中移除(-1)
  // 2. 对比 cnt1 和 cnt2，如果完全相同，则表示 s1 通过排列可以得到当前滑动窗口中的字符，也表示 s1 是 s2 的子串
  // ! 3. 进一步优化 cnt1 和 cnt2 的对比逻辑，可以通过一个 diff 变量记录 cnt1 和 cnt2 有差异的字符的个数，即 cnt1[x] != cnt2[x] 的 x 的数量

  const len1 = s1.length,
    len2 = s2.length,
    cnt1: number[] = new Array(26).fill(0); // 用 array 代替 obj，用 0-25 表示英文字母 a-z

  if (len1 > len2) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    const ch = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
    cnt1[ch] = (cnt1[ch] ?? 0) + 1;
  }

  // 设 cnt2 统计滑动窗口中每个字符的出现次数
  const cnt2: number[] = new Array(26).fill(0);

  for (let i = 0; i < len2; i++) {
    // 窗口 [i-len1, i] i-len1 不小于 0
    // 设 leave = s2[i-len1-1] 为离开窗口的字符
    // 设 enter = s2[i] 为进入窗口的字符
    const enter = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
    cnt2[enter] = (cnt2[enter] ?? 0) + 1;

    // 当 i 右移了超过 len1 个元素后，需要处理离开滑动窗口的元素，离开的元素用指针 i-len1 表示
    if (i + 1 > len1) {
      const leave = s2[i - len1].charCodeAt(0) - 'a'.charCodeAt(0);
      // 离开滑动窗口的元素一定在 cnt2 中，且值 > 0
      cnt2[leave]--;
      // console.log('enter', s2[i], 'leave', s2[i - len1]);
    }

    // 对比 cnt1 和 cnt2，如果完全一致，则返回 true
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }

  // console.log(cnt1, cnt2);

  return false;
}
// @lc code=end

console.log(checkInclusion('ab', 'eidbaooo'), true);
console.log(checkInclusion('ab', 'eidboaoo'), false);
console.log(checkInclusion('a', 'ab'), true);
console.log(checkInclusion('ab', 'a'), true);

export {};
