/**
希尔排序 shell sort

https://juejin.cn/post/6844903895789993997#heading-3

时间复杂度：
最好：nlogn
平均：取决于差距序列
最坏：n(logn)^2

空间复杂度：
O(1)
 */

const shellSort = function (arr) {
  let len = arr.length,
    gap = 1;

  while (gap < len / 3) {
    //动态定义间隔序列
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i - gap;

      while (arr[j] > temp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }

      arr[j + gap] = temp;
    }

    gap = Math.floor(gap / 3);
  }

  return arr;
};

console.log(
  shellSort([
    5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2,
    1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1,
  ]),
);
