/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (63.26%)
 * Likes:    930
 * Dislikes: 0
 * Total Accepted:    184.7K
 * Total Submissions: 289.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L 的头节点 head ，单链表 L 表示为：
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * 请将其重新排列后变为：
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * 不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4]
 * 输出：[1,4,2,3]
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2,3,4,5]
 * 输出：[1,5,2,4,3]
 *
 *
 *
 * 提示：
 *
 *
 * 链表的长度范围为 [1, 5 * 10^4]
 * 1 <= node.val <= 1000
 *
 *
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // 取链表中点
  // 反转后半段链表
  // 将前半段和反转后的后半段链表进行交叉合并
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)

  if (!head) return;

  // 取中间节点
  const mid = middleOfListNode(head);
  // 前半段链表以 head 开头，mid 截止
  const l1 = head;
  // 后半段链表以 mid.next 开头
  const l2 = reverseListNode(mid.next);
  // 前后半段链表关联关系要断开
  mid.next = null;
  // 交叉合并前后半段链表
  mergeListNode(l1, l2);
}

function middleOfListNode(head: ListNode) {
  // 快慢指针
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseListNode(head: ListNode): ListNode {
  // 迭代反转链表
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev!;
}

function mergeListNode(cur1: ListNode, cur2: ListNode) {
  while (cur1 && cur2) {
    // 要把 1, 2, 3...n-2, n-1 交叉排序成 1, n, 2, n-1, 3, n-2
    // 那么就需要四个变量分别记录 cur1, cur2, next1, next2
    // 每次循环:
    //   cur1.next = cur2
    //   cur2.next = next1
    //   cur1 = next1
    //   cur2 = next2
    const next1 = cur1.next;
    const next2 = cur2.next;

    cur1.next = cur2;
    cur2.next = next1;

    cur1 = next1;
    cur2 = next2;
  }
}
// @lc code=end

export {};
