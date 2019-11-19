/**
 * 输入一个链表，反转链表后，输出新链表的表头。 
 */

 /**
  * 以3个节点为例：

用pre记录当前节点的前一个节点

用next记录当前节点的后一个节点

    当前节点a不为空，进入循环，先记录a的下一个节点位置next = b;再让a的指针指向pre

    移动pre和head的位置，正因为刚才记录了下一个节点的位置，所以该链表没有断，我们让head走向b的位置。

    当前节点为b不为空，先记录下一个节点的位置，让b指向pre的位置即a的位置，同时移动pre和head

    当前节点c不为空，记录下一个节点的位置，让c指向b，同时移动pre和head，此时head为空，跳出，返回pre。

反转链表 
  */

  /*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(!pHead || !pHead.next)
        return pHead
    let pre = null
    let next = null
    while(pHead != null) {
        next = pHead.next
        pHead.next = pre
        pre = pHead
        pHead = next
    }
    return pre
}