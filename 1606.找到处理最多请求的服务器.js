/*
 * @lc app=leetcode.cn id=1606 lang=typescript
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start
function busiestServers(k, arrival, load) {
  // 设 count 对象，key 表示服务器，value 记录每个服务器处理请求的次数
  // 设 timeline 对象，key 表示服务器，value 记录每个服务器当前任务结束的时间
  // 遍历 arrival，当遍历至 i 时，设本次任务的到达时间 arrivalTime = arrival[i]，设本次任务复杂时间 loadTime = load[i]，设当前循环遍历的下标 cur = i%k
  // 从 cur 开始循环遍历 timeline，分别拿 timeline[cur] 与 arrivalTime 进行对比
  // 如果满足 timeline[cur] < arrivalTime，表示第 cur 个服务器空闲，则将 loadTime 累加到 timeline[cur] 上，并将 count[cur] + 1
  // 遍历 count 对象，取出最大的 key（服务器）
  const count = new Array(k).fill(0);
  const timeline = new Array(k).fill(0);

  for (let i = 0; i < arrival.length; i++) {
    const arrivalTime = arrival[i];
    const loadTime = load[i];
    const start = i % k;
    const end = start + k - 1;

    // console.log({
    //   arrivalTime,
    //   loadTime,
    //   start,
    //   end,
    // });

    for (let j = start; j <= end; j++) {
      const cur = j % k;

      // console.log('cur', cur);

      if (timeline[cur] < arrivalTime) {
        timeline[cur] = arrivalTime + loadTime - 1;
        count[cur]++;
        break;
      }
    }

    // console.log('timeline', timeline);

    // 超过 end 的请求直接丢弃不处理
  }

  const max = count.reduce((max, val) => Math.max(max, val), 0);
  const ret = [];
  count.forEach((val, i) => val === max && ret.push(i));
  return ret;
}
// @lc code=end

console.log(busiestServers(3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3]), [1]);
console.log(busiestServers(3, [1, 2, 3, 4], [1, 2, 1, 2]), [0]);
console.log(busiestServers(3, [1, 2, 3], [10, 12, 11]), [0, 1, 2]);
console.log(busiestServers(3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2]), [1]);
console.log(busiestServers(3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2]), [1]);
console.log(busiestServers(1, [1], [1]), [0]);
console.log(busiestServers(2, [1, 2, 3], [1000000000, 1, 1000000000]), [1]);
