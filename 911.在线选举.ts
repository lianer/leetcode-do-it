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
    let top = -1;

    this.voteCounts.set(-1, -1);

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];
      if (!this.voteCounts.has(person)) {
        this.voteCounts.set(person, 1);
      } else {
        this.voteCounts.set(person, (this.voteCounts.get(person) as number) + 1);
      }
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
      const m = l + Math.floor((r - l + 1) / 2);
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
