/**
归并排序

https://juejin.cn/post/6844903895789993997

时间复杂度：O(nlogn) 稳定的排序算法
空间复杂度：O(n)

排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。

归并排序采用的是分治思想。
分治，顾名思义，就是分而治之，将一个大问题分解成小的子问题来解决。小的子问题解决了，大问题也就解决了。

归并排序是原地排序算法吗？
这是因为归并排序的合并函数，在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。
实际上，尽管每次合并操作都需要申请额外的内存空间，但在合并完成之后，临时开辟的内存空间就被释放掉了。在任意时刻，CPU 只会有一个函数在执行，也就只会有一个临时的内存空间在使用。临时内存空间最大也不会超过 n 个数据的大小，所以空间复杂度是 O(n)。
所以，归并排序不是原地排序算法。


归并排序是稳定的排序算法吗 ？
merge 方法里面的 left[0] <= right[0] ，保证了值相同的元素，在合并前后的先后顺序不变。归并排序是一种稳定的排序方法。

归并排序的时间复杂度是多少 ？
从效率上看，归并排序可算是排序算法中的佼佼者。假设数组长度为 n，那么拆分数组共需 logn 步, 又每步都是一个普通的合并子数组的过程，时间复杂度为 O(n)，故其综合时间复杂度为 O(nlogn)。
最佳情况：T(n) = O(nlogn)。
最差情况：T(n) = O(nlogn)。
平均情况：T(n) = O(nlogn)。

 */

const mergeSort = function (arr) {
  // 归并排序
  // 分治思想，将数组递归切分，然后进行排序，不断切分、排序、合并，最终形成一个有序的数组
  // 1. 取中间值 mid，将数组分割为 left 和 right 两部分
  // 2. 递归切分 left 和 right
  // 3. 当元素个数少于 2 的时候，结束递归
  // 4. 对递归返回的值进行排序、合并，这个操作在一个新的函数中运算
  // 5. 排序、合并操作，创建一个新数组，逐个取出 left 和 right 头部的元素进行对比，将小的部分插入新数组，最后将 left 或 right 剩余的元素插入新数组，返回这个新数组
  // 6. 递归结束后，递归调用栈顶层的函数返回值就是排序好的数组

  const len = arr.length;
  if (len < 2) return arr;

  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = function (left, right) {
  const result = [];

  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 把多出来的 left 或 right 的元素添加到 result 中
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

console.log(mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
