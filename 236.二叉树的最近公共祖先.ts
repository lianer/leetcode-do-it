/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (68.75%)
 * Likes:    1786
 * Dislikes: 0
 * Total Accepted:    391.6K
 * Total Submissions: 567K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
 *
 *
 */

// @lc code=start
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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  // dfs
  // 用深度优先遍历
  // 1. 当左子节点和右子节点或它们的后代节点里有 p 和 q，那么当前节点就是它们的公共祖先
  // 2. 当左子节点或右子节点或它们的后代节点里有 p 或 q 之一，并且当前节点是 p 或 q 中的另一个，那么当前节点就是它们的公共祖先
  // 3. 如果当前节点等于 p 或 q，则返回 true
  // 4. 如果当前节点的后代节点有 p 或 q，则返回 true
  // 5. 如果当前节点为 null 则返回 false
  let ans = null;

  const dfs = (root: TreeNode | null): boolean => {
    if (!root) return false;

    const leftSubTree = dfs(root.left);
    const rightSubTree = dfs(root.right);

    if (
      (leftSubTree && rightSubTree) ||
      ((root.val === p.val || root.val === q.val) && (leftSubTree || rightSubTree))
    ) {
      ans = root;
    }

    return leftSubTree || rightSubTree || root.val === p.val || root.val === q.val;
  };

  dfs(root);

  return ans;
}
// @lc code=end

export {};
