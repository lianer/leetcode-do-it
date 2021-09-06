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

const arrayToBST = function (arr: Array<number | undefined>) {
  const root = new TreeNode(arr[0]);
  let nodeList = [root];
  let i = 1;
  while (i < arr.length) {
    let j = 0;
    const newNodeList: TreeNode[] = [];
    // 遍历 nodeList，将从 i 开始的元素挂载到 node 的 left 和 right 下
    for (; j < nodeList.length; j++) {
      if (arr[i] !== void 0) {
        const node = new TreeNode(arr[i]);
        nodeList[j].left = node;
        newNodeList.push(node);
      }
      if (arr[i + 1] !== void 0) {
        const node = new TreeNode(arr[i + 1]);
        nodeList[j].right = node;
        newNodeList.push(node);
      }
      i += 2;
    }
    nodeList = newNodeList;
  }

  return root;
};

// console.log(arrayToBST([4, 3, 5, 2, 4, undefined, undefined, 1, 3, 3, 5]));

export { TreeNode, arrayToBST };
