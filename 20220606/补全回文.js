/*
有两个字符串 str 和 strips，strips 是 str 的最长回文子序列，让字符串 str 经过最少次数的插入变成回文，返回该回文
例如：str = 'A1B21C', strips = '121'，返回 AC1B2B1CA 或者 CA1B2B1AC
*/

var compeleteStr = function (str, strips) {
  const len = str.length + str.length - strips;
  const ret = [];

  let left = 0;
  let right = strips.length - 1;
};

console.log(compeleteStr('A1B21C', '121'));
