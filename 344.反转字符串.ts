/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // 设 m = (s.length-1)/2，m 向下取整，取 s 长度的中间值，遍历区间 [0 - m]，对第 i 个元素和第 s.length - 1 - i 个元素进行对调
  const m = Math.floor((s.length - 1) / 2);
  for (let i = 0; i <= m; i++) {
    const k = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = k;
  }

  console.log(s);

  // 该题目也可以用双指针做，原理上是一样的，判断条件和索引的位移方式会略微调整一下
}
// @lc code=end

reverseString(['h', 'e', 'l', 'l', 'o']); // [ 'o', 'l', 'l', 'e', 'h' ]
reverseString(['H', 'a', 'n', 'n', 'a', 'h']); // [ 'h', 'a', 'n', 'n', 'a', 'H' ]
reverseString(['H']); // [ 'H' ]

export {};
