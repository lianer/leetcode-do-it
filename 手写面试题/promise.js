/*
https://juejin.cn/post/7043758954496655397

Promise A+
1. Promise 是一个类
2. new Promise(function (resolve, reject) {}) 接收一个函数，有 resolve, reject 两个参数
3. Promise 有三种状态，pending/fulfilled/rejected
4. Promise 调用 resovle 的时候，如果状态为 pending，则状态改变为 fulfilled
5. Promise 调用 reject 的时候，如果状态为 pending，则状态改变为 rejected
6. Promise 的 then 函数接收 resolve 和 reject 两个函数，当状态为 fulfilled 或 rejected 的时候调用对应的函数
7. resolve 函数接收一个 result 参数
8. reject 函数接收一个 reason 参数
9. Promise 实例有一个 result 属性，当 resolve 或 reject 的时候，它分别是 result 和 reason
10. 异常情况需要调用 reject 函数
11. .catch 方法等同于 .then(null, reject)
12. .then 的 onFulfilled 参数如果不是一个函数，则用函数包裹一下
13. .then 的 onRejected 参数如果不是一个函数，则用函数包裹一下，并 throw reason
14. .then 方法需要支持异步特性
15. 需要创建 onFulfilledCallbacks/onRejectedCallbacks 用来储存 then 的成功/失败回调函数，当调用 then 的时候，如果为 pending 状态，则将 onFulfilled/onRejected 推入数组中
16. 执行 onFulfilledCallbacks/onRejectedCallbacks 必须异步执行，即要等待 new Promise 函数内的其他同步代码执行完成
17. .then 要支持链式调用，并且每次 .then 都会返回一个新的 Promise 实例，这个新的实例里需要根据当前老实例的状态进行不同的处理
*/

class Promise2 {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(fn) {
    this.PromiseState = Promise2.PENDING;
    this.PromiseResult = null;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(PromiseResult) {
    if (this.PromiseState === Promise2.PENDING) {
      this.PromiseResult = PromiseResult;
      this.PromiseState = Promise2.FULFILLED;
      setTimeout(() => {
        this.onFulfilledCallbacks.forEach((callback) => {
          callback(PromiseResult);
        });
      });
    }
  }

  reject(reason) {
    if (this.PromiseState === Promise2.PENDING) {
      this.PromiseResult = reason;
      this.PromiseState = Promise2.REJECTED;
      setTimeout(() => {
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason);
        });
      });
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (onFulfilled) => onFulfilled;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 如果要支持 .then 的链式调用，则不能用这串逻辑了
    // if (this.PromiseState === Promise2.PENDING) {
    //   this.onFulfilledCallbacks.push(onFulfilled);
    //   this.onRejectedCallbacks.push(onRejected);
    // } else if (this.PromiseState === Promise2.FULFILLED) {
    //   setTimeout(() => onFulfilled(this.PromiseResult));
    // } else if (this.PromiseState === Promise2.REJECTED) {
    //   setTimeout(() => onRejected(this.PromiseResult));
    // }

    const lastPromise = this;

    // .then 链式调用会返回一个新的 promise 实例
    const nextPromise = new Promise2((resolve, reject) => {
      // 如果老的 promise 处于 pending 状态，则将 onFulfilled 和 onRejected 推入堆栈，等待执行
      // 并且将 onFulfilled 或 onRejected 的执行结果，传递给新的 promise 实例
      if (lastPromise.PromiseState === Promise2.PENDING) {
        lastPromise.onFulfilledCallbacks.push(() => {
          try {
            const result = onFulfilled(lastPromise.PromiseResult);
            resolvePromise(nextPromise, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        lastPromise.onRejectedCallbacks.push(() => {
          try {
            const result = onRejected(lastPromise.PromiseResult);
            resolvePromise(nextPromise, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else if (lastPromise.PromiseState === Promise2.FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(lastPromise.PromiseResult);
            resolvePromise(nextPromise, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        setTimeout(() => {
          try {
            const result = onRejected(lastPromise.PromiseResult);
            resolvePromise(nextPromise, result, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });

    return nextPromise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

function resolvePromise(promise, result, resolve, reject) {
  if (promise === result) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  // 如果 .then 里的 onFulfilled 也返回了一个 promise 实例，则将这个返回的实例的结果传递给 .then 生成的新的 promise(nextPromise) 实例
  if (result instanceof Promise2) {
    if (result.PromiseState === Promise2.PENDING) {
      result.then((r) => {
        resolvePromise(promise, r, resolve, reject);
      }, reject);
    } else if (result.PromiseState === Promise2.FULFILLED) {
      resolve(result.PromiseResult);
    } else {
      reject(result.PromiseReject);
    }
  } else if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
    // 如果 onFulfilled 返回值 result 是对象或函数，尝试以 promise 实例进行判断
    let then = null;
    try {
      then = result.then;
    } catch (e) {
      reject(e);
    }

    // 如果 onFulfilled 返回值 result 是一个 promise 对象，有 then 函数
    if (typeof then === 'function') {
      try {
        then.call(result, (r) => {
          resolvePromise(promise, r, resolve, reject);
        });
      } catch (e) {
        reject(e);
      }
    } else {
      resolve(result);
    }
  } else {
    return resolve(result);
  }
}

console.log(1);
new Promise2(function (resolve, reject) {
  console.log(2);
  setTimeout(() => {
    resolve('end');
    console.log(4);
  });
})
  .then(
    (result) => {
      console.log(5);
      console.log(result);
      return 'good';
    },
    (e) => {
      console.log(e);
    },
  )
  .then((result) => {
    console.log(result, 'bye');
  });

console.log(3);
