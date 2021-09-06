// 783. 二叉搜索树节点最小距离
// 给你一个二叉搜索树的根节点 root ，返回树中任意两不同节点值之间的最小差值 。
// 提示：
// 树中节点数目在范围 [2, 100] 内
// 0 <= Node.val <= 105
//
// 这道题目有几个潜在条件，1、它是一个排序好的二叉搜索树；2、它是正整数
// ! 但这个解法还是没弄明白它是怎么计算非相邻节点的差值的

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode, arrayToBST } from '../lib/tree-node';

function minDiffInBST(root: TreeNode | null): number {
  let ans = Number.MAX_SAFE_INTEGER;
  let pre = -1;
  const dfs = function (root: TreeNode | null) {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre === -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return ans;
}

console.log(minDiffInBST(arrayToBST([4, 3, 5, 2, 4, undefined, undefined, 1, 3, 3, 5])), 1);
console.log(minDiffInBST(arrayToBST([4, 2, 6, 1, 3])), 1);
console.log(minDiffInBST(arrayToBST([90, 69, undefined, 49, 89, undefined, 52])), 1);
