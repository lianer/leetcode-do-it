// 对于参照 NodeJS Callback 标准进行设计的函数，都可以通过 promisify 进行 promise 转化
// 1. 包装原始函数，返回一个新函数
// 2. 调用新函数，promisify 内部调用原始函数，监听执行结果，并返回一个 promise 对象
// 3. 当 promisify 内部原始函数执行完成，通过 callback 回调时，根据 err、stdout、stderr 信息转换成 promise 里的 onfulfilled 和 onrejected 回调函数

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, ret) => {
        if (err) {
          return reject(err);
        }
        resolve(ret);
      });
    });
  };
}

async function test() {
  const exists = promisify(require('fs').stat);
  const ret = await exists(__dirname);
  console.log(ret);
}

test();
