/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isMatch(left: string, right: string) {
  return (left === '[' && right === ']') || (left === '{' && right === '}') || (left === '(' && right === ')');
}

function isValid(s: string): boolean {
  // 单调栈
  // 设数组 arr，遍历 s，每出现一个左括号就推入 arr，每出现一个右括号就与 arr 最后一个左括号对比
  // 如果匹配则从 arr 弹出此元素，如果不匹配则返回 false
  // 最终 s 遍历结束时 arr 为空则返回 true
  const arr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === '[' || ch === '{' || ch === '(') {
      arr.push(ch);
    } else {
      if (!isMatch(arr.pop() ?? '', ch)) {
        return false;
      }
    }
  }
  return arr.length === 0;
}
// @lc code=end

console.log(isValid('()'), true);
console.log(isValid('()[]{}'), true);
console.log(isValid('(]'), false);
console.log(isValid('([)]'), false);
console.log(isValid('{[]}'), true);

export {};
