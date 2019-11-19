/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5

示例 2:

输入: 1->1->1->2->3
输出: 2->3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    var dummy = new ListNode(head.val - 1)
    dummy.next = head
    var res = dummy,pre = dummy,now = head,next = head.next
    while(next != null){
        if (pre.val != now.val && now.val != next.val) {
            res.next = now
            res = now
        }
        pre = pre.next
        now = now.next
        next = next.next
    }
    if (pre.val != now.val) {
        res.next = now
        res = now
    }
    res.next = null
    return dummy.next

}