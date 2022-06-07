/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (57.20%)
 * Likes:    1752
 * Dislikes: 0
 * Total Accepted:    484.6K
 * Total Submissions: 837K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 *
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 *
 * 此外，你可以假设该网格的四条边均被水包围。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * grid[i][j] 的值为 '0' 或 '1'
 *
 *
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 遍历每个单元格，如果是陆地，则从这个单元格开始向上下左右查找相邻的陆地
  // 设一个大小同 grid 的二维数组 checked 表示已经被使用过的陆地
  // 设 ans 统计岛屿数量，每当找到一个未被使用过的陆地，就将计数 +1
  const checked = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false));
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === '1' && !checked[i][j]) {
        ans++;
        check(checked, grid, i, j);
      }
    }
  }
  return ans;
};

var check = function (checked, grid, i, j) {
  const stack = [[i, j]];
  while (stack.length) {
    const [i, j] = stack.shift();
    if (checked[i][j] || grid[i][j] === '0') continue;
    checked[i][j] = true;
    if (j > 0) {
      stack.push([i, j - 1]);
    }
    if (j < checked[0].length - 1) {
      stack.push([i, j + 1]);
    }
    if (i > 0) {
      stack.push([i - 1, j]);
    }
    if (i < checked.length - 1) {
      stack.push([i + 1, j]);
    }
  }
};
// @lc code=end
