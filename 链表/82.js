// 82. 删除排序链表中的重复元素 II
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }

  // 构造一个虚拟的节点，指向 head，避免 head 会被删除的情况
  const dummy = new ListNode(0, head);

  // 用 cur 变量记录当前所在节点的位置，从 head(dummy.next) 开始遍历
  let cur = dummy;
  while (cur.next && cur.next.next) {
    // 如果 head 和 next 有重复，则进入
    if (cur.next.val === cur.next.next.val) {
      // 则记录这个重复的值，由于是递增的，只需要记住这个值即可
      const x = cur.next.val;
      // 开始从 cur.next 开始删除重复的节点，即把 cur.next 重新赋值，跳过那些重复的节点即可
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      // cur 后两个节点没有重复，则可以把 cur 往前走一位
      cur = cur.next;
    }
  }

  // 最后，由于原 head 可能是重复的已经被删除了，这种情况 dummy 已经不指向 head 了，因此需要返回 dummy.next
  return dummy.next;
};

console.log(
  deleteDuplicates(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5))))
        )
      )
    )
  )
);
