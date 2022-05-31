/**
堆排序 heap sort

https://juejin.cn/post/6844903895789993997#heading-4

*/

function heapify(arr, i, len) {
  // 数组映射到二叉树，用 2 * i + 1 表示左子节点，用 2 * i + 2 表示右子节点
  let max = i;
  let left = 2 * i + 1;
  let right = left + 1;

  // 如果左子节点大于父节点，则标记左子节点为最大元素
  if (left < len && arr[left] > arr[max]) {
    max = left;
  }
  // 如果右子节点大于父节点，则标记右子节点为最大元素
  if (right < len && arr[right] > arr[max]) {
    max = right;
  }

  // 如果 max 有发生变化，左子节点或右子节点的元素大于父节点，拿该节点与父节点 i 进行交换
  if (max !== i) {
    swap(arr, i, max);

    // 若子节点和父节点发生了交换，则也会影响到子节点的子节点，因此需要递归再对子节点进行判断和交换
    // 这里的 max 指的是被调整的那个子节点
    heapify(arr, max, len);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapSort(arr) {
  let len = arr.length;

  // 第一遍循环的目的，是找出大顶堆堆顶最大的那个元素
  // 取 i = [len/2-1..1] 构建大顶堆（最后一个非叶子节点，数组映射到二叉树，用 2 * i + 1 表示左子节点，用 2 * i + 2 表示右子节点）
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }

  // 经过大顶堆调整后，数组是这样的：7,6,5,3,2,1,4，完全符合大顶堆的定义
  // 这样使用倒序遍历，为的就是将堆顶的元素（最大的元素）逐个取出然后排到数组尾部
  for (let i = arr.length - 1; i > 0; i--) {
    // 大顶堆堆顶的元素一定是最大的，因此与最后一个元素进行交换
    // 第一次循环，[4,6,5,3,2,1] ,7 => [6,4,5,3,2,1] ,7
    // 第二次循环，[1,4,5,3,2] ,6,7 => [5,3,4,1,2] ,6,7
    // 第三次循环，[3,4,1,2] ,5,6,7 => [4,3,1,2] ,5,6,7
    // 第四次循环，[3,1,2] ,4,5,6,7 => [3,1,2] ,4,5,6,7
    // 第五次循环，[1,2] ,3,4,5,6,7 => [2,1] ,3,4,5,6,7
    // 第六次循环，[1] ,2,3,4,5,6,7 => [1] ,2,3,4,5,6,7
    // 第七次循环，1,2,3,4,5,6,7 => end
    swap(arr, 0, i);
    len--;
    heapify(arr, 0, len);
  }

  return arr;
}

console.log(heapSort([5, 2, 7, 3, 6, 1, 4]));
