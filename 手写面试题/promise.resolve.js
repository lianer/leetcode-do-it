// resolve 方法要兼容的情况稍多一些
// resolve 返回一个新的 promise 实例
// 当入参为 promise 时，直接返回该参数
// 当入参为 thenable （带有 then 方法的对象），需要取 then 的执行结果作为返回的新的 promise 实例的结果
// 当入参为其他类型时，直接将参数作为返回的新的 promise 实例的结果

Promise.myResolve = function (value) {
  if (value instanceof Promise) {
    // 原生 Promise 实例
    return value;
  } else if (value !== null && typeof value === 'object' && typeof value.then === 'function') {
    // thenable （可能是第三方库实现的 Promise 类构造的实例）
    return new Promise((resolve, reject) => {
      value.then(resolve, reject);
    });
  } else {
    // 普通数据对象
    return new Promise((resolve) => resolve(value));
  }
};
