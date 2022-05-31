/**
 * Promise.any 只要任何一个任务执行成功就返回成功的值
 * 如果任务执行失败了，则会把 reason 推入 errors 数组中
 * 如果所有任务都执行失败了，则会把 errors 抛出异常，并用 AggregateError 对多个错误进行合并
 */

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject('Argument is not iterable');
    }

    if (promises.length === 0) return reject(new AggregateError('All promises were rejected'));

    let count = 0;
    let errors = [];

    promises.forEach((item) => {
      Promise.resolve(item)
        .then((value) => resolve(value))
        .catch((reason) => {
          count++;
          errors.push(reason);
          if (errors.length === promises.length) reject(new AggregateError(errors));
        });
    });
  });
};
