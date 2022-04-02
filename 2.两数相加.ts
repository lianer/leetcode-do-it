/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

import { genListNodeFromArr, listNode2Array } from './lib/list-node';

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(0);
  let cur = head;
  let ten = 0;
  // 模拟加法
  while (l1 || l2 || ten) {
    const a = l1?.val || 0;
    const b = l2?.val || 0;
    const sum = a + b + ten;
    const one = sum % 10; // 个位
    ten = sum >= 10 ? 1 : 0; // 十位

    cur.next = new ListNode(one);
    cur = cur.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
}
// @lc code=end

console.log(listNode2Array(addTwoNumbers(genListNodeFromArr([2, 4, 3]), genListNodeFromArr([5, 6, 4]))!));
console.log(listNode2Array(addTwoNumbers(genListNodeFromArr([9, 9, 9]), genListNodeFromArr([9, 9, 9]))!));

export {};
