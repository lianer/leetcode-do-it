/**
 * 1. Promise 是一个构造函数，接收一个函数，这个函数带有 resolve、reject 两个入参
 * 2. Promise 内部有 pending、fulfilled、rejected 三种状态
 * 3. 调用 resolve 的时候，如果状态为 pending，则转变为 fulfilled
 * 4. 调用 reject 的时候，如果状态为 pending，则转变为 rejected
 * 5. then 方法接收 onFulfilled 和 onRejected 两个方法，调用 then 方法的时候，如果状态为 fulfilled 则调用 onFulfilled，如果状态为 rejected 则调用 onRejected
 * 6. Promise 内部有一个 result 和 一个 reson 对象，分别用于成功和失败的返回值，resolve 的值赋值给 result，reject 或 异常 赋值给 reson
 * 7. catch 方法等同于 then 的 onRejected
 * 8. 构造函数代码执行异常，直接执行 onRejected
 */

class Promise2 {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(fn) {
    this.status = Promise2.PENDING;
    this.result = null;

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(result) {
    if (this.status === Promise2.PENDING) {
      this.status = Promise2.FULFILLED;
      this.result = result;
    }
  }

  reject(reson) {
    if (this.status === Promise2.PENDING) {
      this.status = Promise2.REJECTED;
      this.result = reson;
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (onFulfilled) => onFulfilled;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reson) => {
            throw reson;
          };
    if (this.status === Promise2.FULFILLED) {
      setTimeout(() => onFulfilled(this.result));
    } else if (this.status === Promise2.REJECTED) {
      setTimeout(() => onRejected(this.result));
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

console.log(1);
new Promise2(function (resolve, reject) {
  console.log(2);
  resolve('lianer');
}).then(
  (result) => {
    console.log(3);
    console.log(result);
  },
  (e) => {
    console.log(e);
  },
);

console.log(4);
