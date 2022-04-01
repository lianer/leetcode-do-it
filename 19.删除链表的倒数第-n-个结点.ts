/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

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

// 该题也可以使用快慢指针实现，慢指针比快指针慢 n 步
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 计算链表长度 + 额外空间法
  // 设额外数组 arr，用于存储每个 ListNode
  // 遍历 head，将 ListNode 按序推入 arr
  // 从 arr 中取出倒数第 n-1 个 ListNode，修改其 next 为第 n+1 个 ListNode
  const arr: ListNode[] = [];
  let cur: ListNode | null = head;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  if (n === arr.length) {
    return head?.next || null;
  }

  arr[arr.length - n - 1].next = n === 1 ? null : arr[arr.length - n].next;

  return head;
}
// @lc code=end

const C = new ListNode(3, null);
const B = new ListNode(2, C);
const A = new ListNode(1, B);

console.log(removeNthFromEnd(A, 3));

export {};
