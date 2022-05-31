// Promise.race 是竞赛原则，返回最先成功的或失败的任务

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument is not iterable'));
    }

    // 如果传入的 promises 是空的，则 race 会永远进入 pending 状态
    if (promises.length === 0) {
      return;
    }

    // 其实这个状态判断也是可以去掉的，因为一旦有一个任务调用了 resolve 或 reject，后续的调用都是无效的
    let end = false;

    promises.forEach((item) => {
      Promise.resolve(item)
        .then((value) => {
          end = true;
          if (!end) resolve(value);
        })
        .catch((reason) => {
          end = true;
          if (!end) reject(value);
        });
    });
  });
};
