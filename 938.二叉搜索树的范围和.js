/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // 采用深度优先遍历 DFS，定义一个总和变量 sum
  // 制造一个递归，左节点递归，如果值大于等于 low，则累加
  // 后右节点递归，如果值小于 high，则累加
  let sum = 0;
  const recursive = function (parent) {
    if (!parent) return;
    if (parent.val > low) recursive(parent.left);
    if (parent.val < high) recursive(parent.right);
    if (parent.val && parent.val >= low && parent.val <= high)
      sum += parent.val;
  };
  recursive(root);
  return sum;
};
// @lc code=end

console.log(
  rangeSumBST(
    new TreeNode(
      10,
      new TreeNode(5, new TreeNode(3), new TreeNode(7)),
      new TreeNode(15, null, new TreeNode(18))
    ),
    7,
    15
  ),
  32
);

console.log(
  rangeSumBST(
    new TreeNode(
      10,
      new TreeNode(
        5,
        new TreeNode(3, new TreeNode(1)),
        new TreeNode(7, new TreeNode(6))
      ),
      new TreeNode(15, new TreeNode(13), new TreeNode(18))
    ),
    6,
    10
  ),
  23
);
