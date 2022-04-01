/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function swap(s: string[], left: number, right: number) {
  while (left < right) {
    // 在 javascript 中，string 是一个不可变的值，readonly，无法通过 s[left] = s[right] 的方式改变 string
    // 方法一，s 是字符串，对字符串进行拆分重组（实测性能比较差）
    // s = `${s.substring(0, left)}${s[right]}${s.substring(left + 1, right)}${s[left]}${s.substring(right + 1)}`;
    // 方法二，将 s 转成数组，性能提升明显
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
  return s;
}

function reverseWords(s: string): string {
  // 两层双指针

  // 第一层双指针用于查找单词边界，设 left 代表单词左边界，设 right 代表单词右边界，遍历字符串 s，当 s[i] 为字母时，right 右移
  // 当 s[i] 为空格时，区间 [left, right - 1] 是一个单词，对其进行反转，然后设 left = right+1，继续循环
  // 由于最后一个单词的右侧没有空格，且题目明确最少包含一个词，因此简单的方法是不改变跳出循环的逻辑条件，直接给设 s = s + ' '，使最后一个单词可以被匹配到

  // 第二层双指针用于反转单词
  // 设 swap 用于反转单词的函数，接收单词 word，设 left = 0， right = word.length - 1
  // 对 word 进行遍历，对 word[left] 和 word[right] 进行交换，当不满足 left < right 时退出

  s = s + ' ';
  const arr = [...s];
  let left = 0,
    right = 0;
  while (right < arr.length) {
    if (s[right] === ' ') {
      swap(arr, left, right - 1);
      left = right + 1;
      right++;
    } else {
      right++;
    }
  }

  // return s.slice(0, -1);
  return arr.slice(0, -1).join('');
}
// @lc code=end

console.log(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
console.log(reverseWords('God Ding'), 'doG gniD');

export {};
