"use strict";
/*
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
let node3 = new ListNode(4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
let list1 = node1; // 1 -> 2 -> 4
let node6 = new ListNode(4);
let node5 = new ListNode(3, node6);
let node4 = new ListNode(1, node5);
let list2 = node4; // 1 -> 3 -> 4
/**
 * 【方案三：递归2】
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
    else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};
console.log(JSON.stringify(mergeTwoLists(list1, list2)));
exports.default = { mergeTwoLists };