/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空） 
 */

 /*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
  if(pHead == null){
    return null
  }
  let curr = pHead
  //1、复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
  while(curr) {
    let next = curr.next
    let clone = new RandomListNode(curr.label)
    curr.next = clone
    clone.next = next
    curr = next
  }
   
  curr = pHead
  //2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
  while(curr) {
    curr.next.random = curr.random == null ? null : curr.random.next
    curr = curr.next.next
  }
   
  curr = pHead
  let res = pHead.next
    //3、拆分链表，将链表拆分为原链表和复制后的链表
  while(curr) {
    let clone = curr.next
    curr.next = clone.next
    clone.next = clone.next == null ? null : clone.next.next
    curr = curr.next
  }
  return res
}