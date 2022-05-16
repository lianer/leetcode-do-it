Promise.myAll = function (values) {
  const ret = [];
  let cnt = values.length;

  return new Promise((resolve, reject) => {
    values.forEach((value, index) => {
      Promise.resolve(value).then((res) => {
        ret[index] = res;
        if (--cnt === 0) {
          resolve(ret);
        }
      });
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(3), 500);
});

Promise.myAll([p1, p2, p3]).then((ret) => {
  console.log(ret);
});
