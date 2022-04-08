/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start

function getKthElement(nums1: number[], nums2: number[], k: number): number {
  // 方法一：使用归并排序，然后取第 k 个元素，时间复杂度为 O(n)
  // 方法二：使用二分法
  // 根据两个数组已排序的特点，分别取 k/2 的左侧 [0 - k/2-1] 部分进行对比，排除较小部分，缩小 k 的范围，并移动指针
  // 设 p1 记录 nums1 的指针位置，设 p2 记录 nums2 的指针的位置
  // 边界情况：
  // 1. 当 p1 移动到最右侧 p1 = nums1.length，返回 nums2 中的第 k + p1 个元素
  // 2. 当 p2 移动到最右侧 p2 = nums2.length，返回 nums1 中的第 k + p2 个元素
  // 3. 当 p1, p2 都没有移动到最右侧，且 k 已经缩小到第一个值 k = 1 时，返回 nums1[p1] 和 nums2[p2] 中的较小值
  // 正常情况：
  // 采用分治的思想，从 totalLen 中取中位数 k，类推为从 nums1 和 nums2 中取中位数 k/2

  const len1 = nums1.length,
    len2 = nums2.length;

  // console.log({ k, len1, len2 });

  let p1 = 0,
    p2 = 0;

  while (true) {
    if (p1 === len1) {
      return nums2[p2 + k - 1];
    }
    if (p2 === len2) {
      console.log(p1, k);
      return nums1[p1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[p1], nums2[p2]);
    }

    // 正常情况下，需要对比 nums1[p1 + k/2 - 1] 和 nums2[p2 + k/2 - 1]
    // 设 half 为 k/2
    // 取 nums1[p1 + half - 1] 和 nums2[p2 + half - 1] 进行比较，注意数组边界情况，较小的一方将索引右移 half 个位置
    // k 减去较小方索引右移的个数
    const half = Math.floor(k / 2);
    const newP1 = Math.min(p1 + half, len1) - 1;
    const newP2 = Math.min(p2 + half, len2) - 1;
    const pivot1 = nums1[newP1];
    const pivot2 = nums2[newP2];
    if (pivot1 <= pivot2) {
      k -= newP1 - p1 + 1;
      p1 = newP1 + 1; // newP1 已经可以排除掉了，因此可以右移一位，下一个循环从 newP1 + 1 开始
    } else {
      k -= newP2 - p2 + 1;
      p2 = newP2 + 1;
    }
  }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 设 len1 为 nums1 的长度，设 len2 为 nums2 的长度，设 totalLength 为 len1 + len2
  // 设 k 为 totalLen 的中位数，取 totalLen/2+1（整除向下取整，k 表示长度，而不是索引，因此要 +1）
  // 分两种情况处理：
  // 1. 若 totalLen 为奇数，则直接求中位数 k 的值，
  // 2. 若 totalLen 为偶数，则中位数取 k 和 k+1 的平均值
  const len1 = nums1.length,
    len2 = nums2.length,
    totalLen = len1 + len2;

  if (totalLen % 2 === 1) {
    const k = Math.floor(totalLen / 2) + 1;
    return getKthElement(nums1, nums2, k);
  } else {
    const k1 = Math.floor(totalLen / 2); // 以 [1, 2, 3, 4] 为例，取第 2、3 个的平均值
    const k2 = Math.floor(totalLen / 2) + 1;
    return (getKthElement(nums1, nums2, k1) + getKthElement(nums1, nums2, k2)) / 2;
  }
}

// @lc code=end

// console.log(findMedianSortedArrays([1, 3], [2]), 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5);

export {};
