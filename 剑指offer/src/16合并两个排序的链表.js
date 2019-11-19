/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。 
 */

 /**
  * 类似归并排序的思路
  */
 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    let pre = new ListNode(-1)
    let p1 = pHead1
    let p2 = pHead2
    let p3 = pre
    while(p1 != null && p2 != null) {
        if(p1.val < p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }
        p3 = p3.next
    }
    while(p1 != null) {
        p3.next = p1
        p3 = p3.next
        p1 = p1.next
    }
    while(p2 != null) {
        p3.next = p2
        p3 = p3.next
        p2 = p2.next
    }
     
    return pre.next
     
}

/**递归版本 */

function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 == null)
        return pHead2
    if(pHead2 == null)
        return pHead1
    if(pHead1.val < pHead2.val){
            pHead1.next = Merge(pHead1.next, pHead2)
           return pHead1
    } else {
        pHead2.next = Merge(pHead1, pHead2.next)
        return pHead2
    }
    
}