/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。 
 */


/**
 * 搜索二叉树先中序遍历，存入arr
 * 然后改变各个节点的指向
 */
 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
  if(!pRootOfTree){
    return null
  }
  let arr = []
  sub(pRootOfTree, arr)
  let len = arr.length
  arr[0].left = null
  arr[0].right = arr[1]
  for(let i = 1; i < len - 1; i++) {
    arr[i].left = arr[i - 1]
    arr[i].right = arr[i + 1]
  }
  arr[len - 1].left = arr[len -2]
  arr[len - 1].right = null
  return arr[0]
}
 
 
function sub(node, arr) {
  if(node == null){
    return
  }
    sub(node.left, arr)
    arr.push(node)
    sub(node.right, arr)
}