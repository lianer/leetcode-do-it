/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (56.68%)
 * Likes:    1995
 * Dislikes: 0
 * Total Accepted:    479.5K
 * Total Submissions: 841.7K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 *
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 *
 *
 * 示例 2：
 *
 * 输入：lists = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 * 输入：lists = [[]]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 优先队列合并

  const dummyHead = new ListNode(Number.MIN_SAFE_INTEGER);
  let prev = dummyHead;

  lists = lists.filter((item) => !!item);

  while (lists.length) {
    // 从数组中找出最小的那个链表 n
    let n: number = 0;
    for (let i = lists.length - 1; i >= 1; i--) {
      if (lists[i]!.val < lists[n]!.val) {
        n = i;
      }
    }
    // 将这个链表剥离出来
    const minNode = lists[n]!;
    const next = minNode.next;
    lists[n] = next;
    minNode.next = null;

    lists = lists.filter((item) => !!item);

    prev.next = minNode;
    prev = minNode;
  }

  return dummyHead.next;
}
// @lc code=end

export {};
