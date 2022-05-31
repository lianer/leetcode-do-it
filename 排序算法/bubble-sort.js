/**
冒泡排序
*/

function bubbleSort(arr) {
  // 外层循环控制多少轮循环
  for (let i = 0; i < arr.length; i++) {
    // 内层循环控制每轮多少次比较
    // 没经过一轮循环，最大的那个数就会被移动到队尾，因此 j 只需要遍历到 arr.length - i 即可
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

function bubbleSort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 7, 3, 6, 1, 4]));
console.log(bubbleSort2([5, 2, 7, 3, 6, 1, 4]));
