/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 1. 从头部开始同步遍历两个链表，对它们的数值进行加运算，余数作为新链表当前索引的值，用一个新的链表 head 记录结果，用 tail 记录当前节点
  // 2. 记录进位 carry，并加于下一次循环，初始进位值为 0
  // 3. 如果循环到后面碰到 l1 为 null 或 l2 为 null 的情况，则用 0 代替
  // 4. 计算到最后，l1 和 l2 都为空，则结束循环
  // 5. 最后，如果 carry 还有值，则需要再加一个节点
  const head = new ListNode();
  let tail = head;
  let carry = 0;
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    const val = sum % 10;
    carry = sum > 9 ? 1 : 0;
    tail.next = new ListNode(val);
    tail = tail.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    tail.next = new ListNode(carry);
  }
  return head.next;
};
// @lc code=end

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  ),
  [7, 0, 8]
);

console.log(
  addTwoNumbers(
    new ListNode(9, new ListNode(9, new ListNode(9))),
    new ListNode(9, new ListNode(9))
  ),
  [1, 0, 9, 8]
);
