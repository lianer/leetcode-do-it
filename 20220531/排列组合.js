// [[m, n], [a, b], [0, 1]] 求二维数组排列组合的情况有多少种，返回可能的情况的数组，并去重

function fn(arr) {
  // 深度遍历
  const ret = [];
  function dfs(arr, i, str) {
    if (i === arr.length) {
      ret.push(str);
      return;
    }
    for (let j = 0; j < arr[i].length; j++) {
      dfs(arr, i + 1, str + arr[i][j]);
    }
  }
  dfs(arr, 0, '');
  return ret;
}

console.log(
  fn([
    ['a', 'b'],
    ['c', 'd'],
    ['0', '1'],
  ]),
);
