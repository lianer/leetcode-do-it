/**
插入排序

借用一个新数组，依次往新数组里插入元素，插入的元素根据大小对比放到对应的位置
 */

function insertSort(arr) {
  const ret = [arr[0]];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    const cur = arr[i];
    for (j = ret.length; j >= 0; j--) {
      if (cur >= ret[j]) {
        ret.splice(j + 1, 0, cur);
        break;
      } else if (j === 0) {
        ret.unshift(cur);
      }
    }
  }

  return ret;
}

console.log(insertSort([5, 2, 7, 3, 6, 1, 4]));
