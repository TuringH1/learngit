/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4

示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-list
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
var sortList = function(head) {
    if (!head || !head.next) {
        return head         
    }
    var dummy = new ListNode()
    dummy.next = head
    
    var slow = dummy
    var fast = dummy

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    var left = head
    
    var right = slow.next
    slow.next = null 

    left = sortList(left)
    right = sortList(right)

    return mergeTwoLists(left, right)

};

var mergeTwoLists = function(l1, l2){
    if(!l1 || !l2){
        return l1 || l2
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}