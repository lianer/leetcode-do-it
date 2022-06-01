/**
JS 实现一个带并发限制的异步调度器 Scheduler
https://blog.csdn.net/qq_42222908/article/details/118881557
*/

/**
 * 题目: JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
 * 条件: 只能修改Sheduler
 **/

// Scheduler 实例有一个 add 方法，接收一个函数，立即返回一个 Promise 实例
// Scheduler 可以控制任务并发数（2个），超过并发数的任务进入等待队列，要等待当前的异步任务执行完成才能进入下一个任务
class Scheduler {
  constructor(maxThreads = 2) {
    this.threads = 0;
    this.maxThreads = maxThreads;
    this.queue = [];
  }

  add(callback) {
    let resolve;

    const job = new Promise((_resolve) => (resolve = _resolve))
      .then(() => callback())
      .finally(() => {
        --this.threads;
        this.check();
      });

    this.queue.push(resolve);
    this.check();

    return job;
  }

  check() {
    if (this.threads < this.maxThreads && this.queue.length > 0) {
      this.threads++;
      this.queue.shift()();
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  const result = scheduler.add(() => timeout(time));
  result.then(() => console.log(order + 'order'));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
addTask(2000, '5');
// output: 2 3 1 5
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
