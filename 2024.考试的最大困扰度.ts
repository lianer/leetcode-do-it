/*
 * @lc app=leetcode.cn id=2024 lang=typescript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
function maxConsecutiveAnswers(answerKey: string, k: number): number {
  // 此题目可以拆分为「T改F」和「F改T」两种情况
  // 两种情况分别采用滑动窗口的方式求最大值，再进行对比
  return Math.max(consecutiveAnswers(answerKey, k, 'T'), consecutiveAnswers(answerKey, k, 'F'));
}

function consecutiveAnswers(answerKey: string, k: number, ch: string): number {
  let l = 0,
    r = 0,
    sum = 0,
    ans = 0,
    length = answerKey.length;

  do {
    // 循环过程中，r 右移，sum 记录非 ch 的累计长度
    sum += answerKey[r] !== ch ? 1 : 0;

    while (sum > k) {
      // 当非 ch 的累计长度超过 k 时（等于 k 时还不行，r 右侧可能还有 ch），则开始右移 l，直到 sum 被减掉 1，不满足 sum > k 条件
      // 结束循环后，区间 [l - r] 就是满足条件的一个区间
      sum -= answerKey[l] !== ch ? 1 : 0;
      l++;
    }

    // 将符合条件的区间的长度进行对比，取最大值
    ans = Math.max(ans, r - l + 1);
  } while (++r < length);

  return ans;
}
// @lc code=end

console.log(maxConsecutiveAnswers('TTFF', 2), 4);
console.log(maxConsecutiveAnswers('TFFT', 1), 3);
console.log(maxConsecutiveAnswers('TTFTTFTT', 1), 5);
