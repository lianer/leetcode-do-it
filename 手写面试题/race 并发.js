const { isEqual } = require('lodash');

let requestTimes = 0;
const sleep = (delay) => new Promise((r) => setTimeout(r, delay));
const getUserInfo = async function (id) {
  requestTimes++;
  await sleep(1000);
  return {
    id,
    name: 'Jack - ' + id,
  };
};

const cacheGetUserInfo = function (callback) {
  const cache = {};
  return (id) => {
    if (cache[id]) {
      return cache[id];
    } else {
      cache[id] = callback(id);
      return cache[id];
    }
  };
};

const cachedGetUserInfo = cacheGetUserInfo(getUserInfo);

const queue = [];
const exam = async function (id, max = 2) {
  // 每次调用 exam，判断 queue 长度是否超出
  // 如果超出并发限制，则通过 Promise.race 监听 queue 中完成的任务，然后重新调用 exam，重新排队或执行
  if (queue.length >= max) {
    console.log('queue', id);
    return Promise.race(queue).then(() => exam(id));
  }

  // 如果没有超过并发限制，则执行真正的异步任务，任务执行完成后从队列中删除该任务

  console.log('exec', id);

  const promise = cachedGetUserInfo(id)
    .then((ret) => {
      console.log('ret', ret);
      return ret;
    })
    .finally(() => queue.splice(queue.indexOf(promise), 1));

  queue.push(promise);

  return promise;
};

const test = function () {
  Promise.all([exam('1'), exam('2'), exam('3'), exam('1')]).then((values) => {
    console.log(values);
    console.log(
      'passed',
      isEqual(values, [
        { id: '1', name: 'Jack - 1' },
        { id: '2', name: 'Jack - 2' },
        { id: '3', name: 'Jack - 3' },
        { id: '1', name: 'Jack - 1' },
      ]),
      isEqual(requestTimes, 3),
    );
  });
};

test();
