/**
 * 1. Promise.all 接收一个数组或迭代器
 * 2. Promise.all 会等待所有任务都完成，再执行回调
 * 3. 如果有一个参数不是 promise 对象，那么会被忽略，并放到返回的数组中
 * 4. 在任何情况下，Promise.all 回调函数返回的都是一个数组
 * 5. 如果有一个任务失败了，Promise.all 则会进入异常回调，不管其他任务是否成功
 */

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Arguments is not iterable'));
    }

    if (promises.length === 0) return resolve(promises);

    let count = 0;
    let result = [];

    // 直接 forEach 循环为每个任务创建 Promise 实例，然后观察 Promise 的执行结果，进行 count 计数或抛出异常
    promises.forEach((item, index) => {
      if (item instanceof Promise) {
        item
          .then((value) => {
            count++;
            result[index] = value;
            if (count === promises.length) resolve(result);
          })
          .catch(reject);
      } else {
        count++;
        result[index] = item;
        if (count === promises.length) resolve(result);
      }
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 1000);
});

Promise.myAll([p1, p2, p3])
  .then((ret) => {
    console.log(ret);
  })
  .catch((e) => {
    console.log(e);
  });
