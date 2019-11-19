/**
 * 输入一个链表，输出该链表中倒数第k个结点。 
 */

 /**
  * 快慢指针
  * f先走k步
  * 然后f，s同时走
  * f为空的时候，s是倒数第k 个
  */

 /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    let f = head
    let s = head
    for(let i = 0; i < k; i++) {
        if(!f){
            return null
        }
        f = f.next
    }
    while(f) {
        f = f.next
        s = s.next
    }
    return s
}