/**
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。 
 */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let res = []
    let dummy = head
    while(dummy){
        res.push(dummy.val)
        dummy = dummy.next
    }
 
    return res.reverse()
}