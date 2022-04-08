/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 *
 * https://leetcode-cn.com/problems/flood-fill/description/
 *
 * algorithms
 * Easy (57.92%)
 * Likes:    307
 * Dislikes: 0
 * Total Accepted:    101.2K
 * Total Submissions: 174.7K
 * Testcase Example:  '[[1,1,1],[1,1,0],[1,0,1]]\n1\n1\n2'
 *
 * 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。
 *
 * 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。
 *
 * 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上
 * 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上
 * 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。
 *
 * 最后返回 经过上色渲染后的图像 。
 *
 *
 *
 * 示例 1:
 *
 *
 *
 *
 * 输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2
 * 输出: [[2,2,2],[2,2,0],[2,0,1]]
 * 解析: 在图像的正中间，(坐标(sr,sc)=(1,1)),在路径上所有符合条件的像素点的颜色都被更改成2。
 * 注意，右下角的像素没有更改为2，因为它不是在上下左右四个方向上与初始点相连的像素点。
 *
 *
 * 示例 2:
 *
 *
 * 输入: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
 * 输出: [[2,2,2],[2,2,2]]
 *
 *
 *
 *
 * 提示:
 *
 *
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], newColor < 2^16
 * 0 <= sr < m
 * 0 <= sc < n
 *
 *
 */

// @lc code=start
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  // 模拟法
  // 根据 sr, sc 找到对应坐标的像素值，设 originColor = image[sr][sc]
  // 设数组 points[[row, col]] 存储待上色的点，将初始值 [sr, sc] 推入 points
  // 这里通过 while(points.length > 0) 循环代替递归
  // 每轮循环从 points 中取出一个像素点，查找该像素点上下左右四个方向的其他像素点，判断像素值是否与 originColor 相同，若相同则修改为 newColor 并推入 points
  // 超时，应该是 points.pop() 操作数组的速度太慢导致的

  const originColor = image[sr][sc];
  const rows = image.length;
  const cols = image[0].length;
  const points: [number, number][] = [];

  if (originColor === newColor) {
    return image;
  }

  points.push([sr, sc]);

  image[sr][sc] = newColor;

  while (points.length > 0) {
    const [r, c] = points.pop()!;
    // console.log([r, c]);

    // 上
    if (r > 0 && image[r - 1][c] === originColor) {
      image[r - 1][c] = newColor;
      points.push([r - 1, c]);
    }
    // 下
    if (r < rows - 1 && image[r + 1][c] === originColor) {
      image[r + 1][c] = newColor;
      points.push([r + 1, c]);
    }
    // 左
    if (c > 0 && image[r][c - 1] === originColor) {
      image[r][c - 1] = newColor;
      points.push([r, c - 1]);
    }
    // 右
    if (c < cols - 1 && image[r][c + 1] === originColor) {
      image[r][c + 1] = newColor;
      points.push([r, c + 1]);
    }
  }
  return image;
}
// @lc code=end

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
  '=',
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ],
);

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    2,
  ),
  '=',
  [
    [2, 2, 2],
    [2, 2, 2],
  ],
);

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    1,
  ),
  '=',
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
);

export {};
