/**
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
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
var reverseList = function(head) {
    var result = null
    while(head != null){
        var temp = head.next
        head.next = result
        result = head 
        head = temp
    }
    return result
}

function reverseList(head){
    if (!head || !head.next) {
        return head
    }
    var tail = head.next 
    head.next = null
    var newHead = reverseList(tail)
    tail.next = head
    return newHead
}

function reverseList(head){
    var a = null
    var b = head
    var c = head
    while(b){
        c = c.next
        b.next = a
        a = b
        b = c
    }
    return a
}

function reverseList(head){
     // 递归到最后一个节点，返回新的新的头结点
     if (head.next == null) {
        return head;
    }
    var newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
