/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。 
 */

 /**
  * arr存节点
  * res存要打印的值
  * arr不为空的时候，每次取出第一个
  */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
  let res = []
  let arr = []
  if(root != null)
  arr.push(root)
  while(arr.length) {
   let node = arr.shift()
    if(node.left != null) {
      arr.push(node.left)
    }
    if(node.right != null) {
      arr.push(node.right)
    }
    res.push(node.val)
  }
  return res
}