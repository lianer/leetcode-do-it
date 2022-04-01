/*
 * @lc app=leetcode.cn id=954 lang=typescript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
// function minus(map: Map<number, number>, key: number) {
//   const val = map.get(key)!;
//   if (val > 1) {
//     map.set(key, val - 1);
//   } else {
//     map.delete(key);
//   }
// }

// function canReorderDoubled(arr: number[]): boolean {
//   arr = arr.sort((a, b) => a - b);
//   let l = 0,
//     r = 1;
//   while (l < arr.length - 1) {
//     while (r < arr.length) {
//       if (arr[r] === 2 * arr[l]) {
//         break;
//       }
//       if (arr[r] < 2 * arr[l]) {
//         continue;
//       }
//       return false;
//     }
//     l++;
//   }
// }

function canReorderDoubled(arr: number[]): boolean {
  // i=0, arr[1] = 2 x arr[0]
  // i=1, arr[3] = 2 x arr[2]
  // i=2, arr[5] = 2 x arr[4]
  // i=3, arr[7] = 2 x arr[6]
  // i=4, arr[9] = 2 x arr[8]
  // 规律：数组 arr 可以重组成 arr.length/2 对符合 arr[n] = 2 x arr[n-1] 条件的结果
  // 理论上无需排序，只需要通过映射表记录每个值的数量，遍历映射表对每个值进行两两抵消，最终映射表的长度为 0 则返回 true
  const map = new Map<number, number>();
  arr
    .sort((a, b) => Math.abs(a) - Math.abs(b))
    .forEach((val) => {
      map.set(val, (map.get(val) ?? 0) + 1);
    });

  // console.log(map);

  const keys = map.keys();
  // console.log('keys', keys);

  for (let key of keys) {
    const k1 = key;
    const k2 = key * 2;
    const v1 = map.get(k1) ?? 0;
    const v2 = map.get(k2) ?? 0;

    // console.log(v1, v2);

    if (v1 > v2) {
      return false;
    }
    if (map.has(k2)) {
      map.set(k2, v2 - v1);
    }
  }

  return true;
}
// @lc code=end

console.log(canReorderDoubled([3, 1, 3, 6]), false);
console.log(canReorderDoubled([2, 1, 2, 6]), false);
console.log(canReorderDoubled([4, -2, 2, -4]), true);
console.log(canReorderDoubled([2, 4, 0, 0, 8, 1]), true);
console.log(canReorderDoubled([0, 0, 0, 0, 0, 0]), true);

export {};
