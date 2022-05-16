/*
将 flat 数组转换成 tree 形式

考虑到性能最优，这里借用对象的引用特性，借助 map 实现对对象的父子关联
*/

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];

const convert = function (arr) {
  const map = new Map();
  const ret = [];

  arr.forEach((item) => map.set(item.id, item));

  arr.forEach((item) => {
    if (map.has(item.pid)) {
      const parent = map.get(item.pid);
      parent.children = (parent.children || []).concat(item);
    } else {
      ret.push(item);
    }
  });

  return ret;
};

console.log(convert(arr));
