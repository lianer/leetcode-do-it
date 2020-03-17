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
const dominoes = [
    [1, 2],
    [2, 1],
    [1, 2],
    [3, 4],
    [2, 1],
    [6, 5],
    [5, 6],
];
const numEquivDominoPairs = function (dominoes) {
    let printNum = 0;
    let hashMap = {};
    dominoes.forEach(item => {
        let a = item[0];
        let b = item[1];
        let key = a < b ? a * 10 + b : b * 10 + a;
        if (hashMap[key]) {
            hashMap[key]++;
        }
        else {
            hashMap[key] = 1;
        }
    });
    // for (let key of Object.keys(hashMap)) {
    //   let cnt = hashMap[<number>key];
    //   printNum += (cnt * (cnt - 1)) / 2;
    // }
    for (const key in hashMap) {
        if (hashMap.hasOwnProperty(key)) {
            const cnt = hashMap[key];
            printNum += (cnt * (cnt - 1)) / 2;
        }
    }
    return printNum;
};
console.log(numEquivDominoPairs(dominoes));
exports.default = { numEquivDominoPairs };