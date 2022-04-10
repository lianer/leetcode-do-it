// 实现一个模拟 koa 洋葱模型的函数

const compose = (middlers) => (context, callback) => {
  const dispatch = (index) => {
    if (index === middlers.length - 1) {
      callback();
    }
    const current = middlers[index];
    return current(context, dispatch.bind(null, index + 1));
  };
  return dispatch(0);
};
