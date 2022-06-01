// reduce
// 1. reduce(callback[, initialValue])
// 2. callback 是一个函数，入参有 previousValue currentValue currentIndex arr 四个
// 3. initialValue 是初始值，如果未提供，则使用数组的第一个元素作为初始值
// 4. reduce 返回最终的处理结果

Array.prototype.reduce2 = function reduce2(callback, initialValue) {
  const arr = this;

  let previousValue = initialValue ?? arr[0];
  const start = initialValue === void 0 ? 1 : 0;

  for (let i = start; i < arr.length; i++) {
    const currentValue = arr[i];
    previousValue = callback(previousValue, currentValue, i, arr);
  }

  return previousValue;
};

console.log(
  [1, 2, 3].reduce2((a, b) => a + b),
  6,
);

console.log(
  [1, 2, 3].reduce2((a, b) => a + b, 1),
  7,
);
