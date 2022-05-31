/**
快速排序

https://juejin.cn/post/6844903895789993997

快速排序的特点就是快，而且效率高！它是处理大数据最快的排序算法之一。

时间复杂度：
最好：nlogn
平均：nlogn
最好：n^2

空间复杂度：
O(logn)

思想：
先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
左右分别用一个空数组去存储比较后的数据。
最后递归执行上述操作，直到数组长度 <= 1;

特点：快速，常用。

缺点：需要另外声明两个数组，浪费了内存空间资源。
 */

const quickSort = function (arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [].concat(quickSort(left), pivot, quickSort(right));
};

console.log(quickSort([5, 4, 3, 2, 1]));
