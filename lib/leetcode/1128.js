"use strict";
/*
给你一个由一些多米诺骨牌组成的列表 dominoes。
如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

示例：
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1

提示：
1 <= dominoes.length <= 40000
1 <= dominoes[i][j] <= 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
setTimeout(function () {
    process.exit();
}, 2000);
var dominoes = [
    [1, 2],
    [2, 1],
    [1, 2],
    [3, 4],
    [2, 1],
    [6, 5],
    [5, 6],
];
var tryMatch = function (a, b) {
    return (a[0] === b[0] && a[1] === b[1]) || (a[0] === b[1] && a[1] === b[0]);
};
var combination = function (n) {
    // 组合 C(n, m) 表示从 n 个元素中抽取 m 个元素的组合情况
    // 计算组合情况 C(n, 2) = n(n-1)...(n-m+1)/m!
    // 在这里 m 是 2，因此 C(n, 2) = n(n-1)...(n-1)/2
    var end = n - 1;
    var r = 1;
    while (n >= end) {
        r *= n;
        n--;
    }
    return r / 2;
};
var numEquivDominoPairs = function (dominoes) {
    if (dominoes.length === 0) {
        return 0;
    }
    var matchCount = 0;
    var origin = dominoes.shift();
    var newDominoes = dominoes.filter(function (item) {
        return tryMatch(origin, item) === false;
    });
    if (newDominoes.length !== dominoes.length) {
        matchCount = combination(dominoes.length - newDominoes.length + 1);
    }
    return matchCount + numEquivDominoPairs(newDominoes);
};
console.log(numEquivDominoPairs(dominoes));
exports.default = { numEquivDominoPairs: numEquivDominoPairs };