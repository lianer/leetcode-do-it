// 实现一个模拟 koa 洋葱模型的函数

const compose = function (middlers) {
  return function (context, callback) {
    const dispatch = (index) => {
      if (index === middlers.length) {
        callback(context);
      } else {
        const current = middlers[index];
        const next = dispatch.bind(null, index + 1);
        return current(context, next);
      }
    };
    return dispatch(0);
  };
};

// examples
// middlers.push 等同于 koa.use
const middlers = [];

middlers.push(function (context, next) {
  context.a = 1;
  next();
});

middlers.push(function (context, next) {
  context.b = 2;
  next();
});

const app = compose(middlers);
app({}, function (context) {
  console.log(context);
});
