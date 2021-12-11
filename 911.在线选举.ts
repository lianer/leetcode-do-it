/*
 * @lc app=leetcode.cn id=911 lang=javascript
 *
 * [911] 在线选举
 */

// @lc code=start
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
class TopVotedCandidate {
  tops: number[];
  voteCounts: Map<number, number>;
  times: number[];

  constructor(persons: number[], times: number[]) {
    this.tops = []; // 统计每一时刻票数最高的人
    this.voteCounts = new Map<number, number>(); // 统计每个人的票数
    this.times = times;
    let top = -1; // 记录当前时刻最高票数的人

    this.voteCounts.set(-1, -1); // 兜底数据

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];

      // 如果该候选人第一次出现，则设置一个初始值，这个初始值可以是 0，也可以是 1，甚至可以是 100
      // 最终我们比对的是哪个候选人的数值最大，初始值是多少并不影响对比
      if (!this.voteCounts.has(person)) {
        this.voteCounts.set(person, 1);
      } else {
        this.voteCounts.set(person, (this.voteCounts.get(person) as number) + 1);
      }

      // 如果是该候选人统计出来的票数大于上一任，则将该候选人记录为最高票数获得者
      if ((this.voteCounts.get(person) as number) >= (this.voteCounts.get(top) as number)) {
        top = person;
      }
      this.tops.push(top);
    }
  }

  /**
   *
   * @param t 时刻
   * @returns 该时刻票数最高的人
   */
  q(t: number) {
    // 二分法找到满足 times[l] <= t 的最大的 l
    let l = 0,
      r = this.times.length - 1;
    while (l < r) {
      // r - l + 1，此处的 +1 逻辑主要是为了确保中位数的准确性
      // 即假设 times 的长度是 8，如果是 (r-l)/2 得到的是 3.5（floor 后是 3）
      // 如果是 (r-l+1)/2 则得到的是 4，准确度高于前者
      const m = l + Math.floor((r - l + 1) / 2);

      // 如果中位数小于或等于目标值，则 l 变大，否则 r 变小，直至 l = m 的时候退出
      if (this.times[m] <= t) {
        l = m;
      } else {
        r = m - 1;
      }
    }

    return this.tops[l];
  }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
// @lc code=end

const topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
console.log(topVotedCandidate.q(3), 0);
console.log(topVotedCandidate.q(12), 1);
console.log(topVotedCandidate.q(25), 1);
console.log(topVotedCandidate.q(15), 0);
console.log(topVotedCandidate.q(24), 0);
console.log(topVotedCandidate.q(8), 1);
