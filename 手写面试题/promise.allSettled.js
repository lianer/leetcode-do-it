/**
 * allSettled 接收一个 Promise 数组
 * 不管 Promise 任务执行成功还是失败，都会返回一个数组
 * 如果任务执行成功，返回的对象是 { status: 'fulfilled', value: xx }
 * 如果任务执行失败，返回的对象是 { status: 'rejected', reason: xx }
 */

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument is not iterable'));
    }

    if (promises.length === 0) return resolve(promises);

    let count = 0;
    let result = [];

    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          result[index] = {
            status: 'fulfilled',
            value,
          };
        })
        .catch((reason) => {
          result[index] = {
            status: 'rejected',
            reason,
          };
        })
        .finally(() => {
          count++;
          if (count === promises.length) resolve(result);
        });
    });
  });
};
