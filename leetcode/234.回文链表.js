/**
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true
    }
    var slow = head
    var fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next   
    }
    slow = reverse(slow)
    while (slow && head) {
        if (slow.val != head.val) {
            return false
        }
        slow = slow.next
        head = head.next
    }
    return true
};

function reverse(head){
    if (head.next == null) {
        return head 
    }
    var temp = head.next
    head.next = null
    var res = reverse(temp)
    temp.next = head
    return res
}