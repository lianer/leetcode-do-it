/*
EventEmitter

1. on(type, listener, flag)
  1.1 type 作为事件的关键标识，可以被注册多次
  1.2 listener 为回调函数，按注册的顺序被调用
  1.3 flag 用于标识是否插入到 listener 列表的头部
2. emit(key, ...args)
  2.1 key 触发的事件的标识
  2.2 args 透传给回调函数的参数
3. once(type, listener)
  1.1 基本同 on
  1.2 执行一次后销毁
4. off(type, listener)
  4.1 type 要解绑的事件的标识
  4.2 listener 要解绑的事件函数
*/

class EventEmitter {
  constructor() {
    this.events = {}; // { [eventName]: eventCallbacks[] }
  }

  on(type, listener, flag) {
    const callbacks = this.events[type] || [];
    if (flag) {
      callbacks.unshift(listener);
    } else {
      callbacks.push(listener);
    }
    this.events[type] = callbacks;
  }

  once(type, listener) {
    const callbacks = this.events[type] || [];
    callbacks.push((...args) => {
      this.off(type, listener);
      listener(...args);
    });
    this.events[type] = callbacks;
  }

  emit(type, ...args) {
    const callbacks = this.events[type] || [];
    callbacks.forEach((cb) => cb(...args));
  }

  off(type, listener) {
    let callbacks = this.events[type] || [];

    callbacks = callbacks.filter((cb) => cb !== listener);

    if (callbacks.length) this.events[type] = callbacks;
    else delete this.events[type];
  }
}

const emitter = new EventEmitter();

emitter.on('test', (...args) => {
  console.log(args);
});

emitter.emit('test', 1, 2, 3);
