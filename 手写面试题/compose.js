// compose 接收一个数字（中间件），返回一个新的函数
// 新的函数接收一个初始值，和一个回调函数，中间件会依次传递初始值并执行，中间件还会接收一个 next 参数用于跳到下一个中间件
// 回调函数会在所有的中间件执行完成后被执行，并携带最终的值

function compose(middlers) {
  return (state, callback) => {
    const dispatch = (index) => {
      if (index === middlers.length) {
        callback(state);
        return;
      }
      const next = dispatch.bind(null, index + 1);
      middlers[index](state, next);
    };
    dispatch(0);
  };
}

function middle1(state, next) {
  state.text += 'hello';
  next();
}

function middle2(state, next) {
  state.text += ' world';
  next();
}

const app = compose([middle1, middle2]);
app({ text: '' }, (res) => {
  console.log(res);
});
