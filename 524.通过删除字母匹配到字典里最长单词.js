/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// ! 字典序：字典序是指从前到后比较两个字符串的大小的方法。首先比较第一个字符，如果不同则第一个字符较小的字符串更小，如果相同则继续比较第2个字符......如此继续，来比较整个字符串的大小。

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let maxStr = '';
  let maxSi = -1;
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    let wi = 0,
      si = 0;
    while (wi < word.length && si < s.length) {
      const wv = word[wi];
      const sv = s[si];
      si++;
      if (wv === sv) {
        wi++;
        continue;
      }
    }
    if (wi === word.length) {
      if (word.length > maxStr.length || (word.length === maxStr.length && word < maxStr)) {
        maxStr = word;
      }
    }
  }
  return maxStr;
};

// @lc code=end
let s, dictionary;

(s = 'abpcplea'), (dictionary = ['ale', 'apple', 'monkey', 'plea']);
console.log(findLongestWord(s, dictionary), 'apple');

(s = s = 'abpcplea'), (dictionary = ['a', 'b', 'c']);
console.log(findLongestWord(s, dictionary), 'a');

console.log(findLongestWord('abce', ['abe', 'abc']), 'abc');
