/**
 * 节流
 * 在每个所设定的等待时间周期内，节流函数只会执行一次
 * 适用于鼠标移动事件、页面滚动事件、窗口 resize 事件等
 */
const throttle = function (callback: Function, wait: number) {
  let lastTime = Number.MIN_SAFE_INTEGER;

  const throttled = () => {
    const curTime = Date.now();
    if (curTime - lastTime > wait) {
      callback();
      lastTime = curTime;
    }
  };

  return throttled;
};

const throttled = throttle(() => {
  console.log('throttle', Date.now());
}, 500);

throttled();
throttled();
throttled();
throttled();

/**
 * 防抖
 * 连续调用防抖函数，只有在停止调用后过了所设定时间才会执行
 * 适用于搜索框文字输入等
 */
const debounce = function (callback: Function, wait: number) {
  let timer: number = -1;
  let nextCallback = callback;

  const debounced = (...args: any) => {
    clearTimeout(timer);
    nextCallback = () => callback(...args);

    // setTimeout 的 ts 定义有点奇怪
    // 如果第一个参数是 (...args) => void 类型的，则返回值是 NodeJS.timeout 类型（在 @types/node 中定义）
    // 如果第一个参数是 Function，则返回值是 number 类型（在 lib.dom.d.ts 中定义）
    // 这里为了测试方便，使用 lib.dom.d.ts 的定义
    timer = setTimeout(nextCallback, wait);
  };

  const cancel = () => clearTimeout(timer);
  const immediately = () => nextCallback;

  debounced.cancel = cancel;
  debounced.immediately = immediately;

  return debounced;
};

const debounced = debounce(() => {
  console.log('debounce', Date.now());
}, 500);

debounced();
debounced();
debounced();
debounced();

export {};
