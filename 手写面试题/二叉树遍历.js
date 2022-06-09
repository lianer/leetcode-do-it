// 层序遍历
function layer(root) {
  const ret = [];
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();
    ret.push(cur.value);

    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }

  return ret;
}

// 前序遍历，根节点在前，根 -> 左 -> 右
function preorder(root, ret = []) {
  if (root) {
    ret.push(root.val);
    preorder(root.left, ret);
    preorder(root.right, ret);
  }

  return ret;
}

// 前序遍历（使用迭代）
function preorder2(root) {
  const ret = [];
  const queue = [];

  if (!root) return root;

  queue.push(root);

  while (queue.length) {
    const cur = queue.pop(); // 取队尾
    ret.push(root);
    if (cur.right) {
      queue.push(right);
    }
    if (cur.left) {
      queue.push(left); // 后推入 left，这样 left 处于队尾，下次循环就会优先取出 left，模拟一个递归的效果
    }
  }
  return ret;
}

// 中序遍历，根节点在中，左 -> 根 -> 右
function inorder(root, ret = []) {
  if (root) {
    inorder(root.left, ret);
    ret.push(root);
    inorder(root.right, ret);
  }
  return ret;
}

// 中序遍历（使用迭代）
function inorder2(root) {
  const queue = [root];
  const ret = [];
  while (queue.length || root) {
    while (root) {
      queue.push(root);
      root = root.left;
    }
    root = queue.pop();
    ret.push(root);
    root = root.right;
  }
  return ret;
}

// 后续遍历，根节点在后，左 -> 右 -> 根
function postorderTraversal(root) {
  const ret = [];
  if (!root) return ret;

  const fn = (root) => {
    if (!root) return;
    fn(root.left);
    fn(root.right);
    ret.push(root.val);
  };

  fn(root);

  return ret;
}

// 后续遍历（使用迭代）
function postorderTraversal(root) {
  const res = [];
  if (!root) return res;

  const stack = [root];

  // 假设有二叉树 1,null,2,3,null
  // 第一次循环，取出 1，插入到 res 头部，并把 2 推入 stack
  // 第二次循环，取出 2，插入到 res 头部，并把 3 推入 stack
  // 第三次循环，取出 3，插入到 res 头部，循环结束
  while (stack.length) {
    const cur = stack.pop();
    res.unshift(cur.val);

    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }

  return res;
}
