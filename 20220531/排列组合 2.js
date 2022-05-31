// [[m, n], [a, b], [0, 1]] 求二维数组排列组合的情况有多少种，返回可能的情况的数组，并去重

function fn(arr) {
  // 利用 reduce 两两组合
  return arr.reduce((prev, cur, index) => {
    const ret = [];
    for (let i = 0; i < prev.length; i++) {
      for (let j = 0; j < cur.length; j++) {
        ret.push(prev[i] + cur[j]);
      }
    }
    return ret;
  });
}

console.log(
  fn([
    ['a', 'b'],
    ['c', 'd'],
    ['0', '1'],
  ]),
);
