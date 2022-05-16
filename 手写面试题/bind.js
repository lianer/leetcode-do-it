Function.prototype.bind2 = function (_this, ...args) {
  const fn = this;
  return function (...params) {
    fn.call(_this, ...args, ...params);
  };
};

const fn = function (...args) {
  console.log(this, ...args);
};

fn.bind2(0, 1)(2, 3);
