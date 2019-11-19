/**
 * 给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。

 

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

进阶:

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

示例:

输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出: 7 -> 8 -> 0 -> 7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sta1 = []
    var sta2 = []
    while (l1) {
        sta1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        sta2.push(l2.val)
        l2 = l2.next
    }
    var sta = []
    var bit = 0
    while (sta1.length && sta2.length) {
        var value = sta1.pop() + sta2.pop() + bit
        bit = Math.floor(value / 10)
        sta.push(value % 10)
    }
    while (sta1.length) {
        var value = sta1.pop() + bit
        bit = Math.floor(value / 10)
        sta.push(value % 10)
    }
    while (sta2.length) {
        var value = sta2.pop() + bit
        bit = Math.floor(value / 10)
        sta.push(value % 10)
    }

    var dummy = temp = new ListNode()
    while (sta != null) {
        dummy.next = new ListNode(sta.pop())
        dummy = dummy.next
    }
    return temp.next
};

