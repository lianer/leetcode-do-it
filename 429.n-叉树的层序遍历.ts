/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (71.46%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    93.8K
 * Total Submissions: 130.7K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 *
 * 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,null,3,2,4,null,5,6]
 * 输出：[[1],[3,2,4],[5,6]]
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * 输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树的高度不会超过 1000
 * 树的节点总数在 [0, 10^4] 之间
 *
 *
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function levelOrder(root: Node | null): number[][] {
  // 设变量 ret 为最终返回的二维数组
  // 设数组 nodes 记录每一层节点元素，遍历 nodes 直至 nodes 为空
  // 设层数 layer，每遍历一次，layer +1
  // 遍历 nodes，取出 node 并添加到 ret[layer] 中
  // nodes 的初始值为 [root]
  if (!root) {
    return [];
  }

  let layer = 0;
  const nodes: Node[] = [root];
  const ret: number[][] = [];

  while (nodes.length > 0) {
    const len = nodes.length;
    ret[layer] = [];
    for (let i = 0; i < len; i++) {
      const node = nodes.shift()!;
      ret[layer].push(node.val);
      nodes.push(...node.children);
    }
    layer++;
  }
  return ret;
}
// @lc code=end

export {};
