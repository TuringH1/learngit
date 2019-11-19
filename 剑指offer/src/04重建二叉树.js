/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
 * 则重建二叉树并返回。 
 */

 /**
  * 解题思路：
  * 先获取根节点的值rootVal，即前序遍历的第一个pre[0]
  * 然后得到rootVal在 vin 中的序列
  * 可以分别得到，根节点的左右子树的 pre 和 vin 
  * 创建根节点，递归得到完整的树
  */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(!pre.length)
        return null
         
     let rootVal = pre[0]
     let rootIndex = vin.indexOf(rootVal)
      
     let leftVin = vin.slice(0, rootIndex)
     let rightVin = vin.slice(rootIndex + 1)
      
     let leftPre = pre.slice(1, 1 + rootIndex)
     let rightPre = pre.slice(rootIndex + 1)
      
     let root = new TreeNode(rootVal)
     root.left = reConstructBinaryTree(leftPre, leftVin)
     root.right = reConstructBinaryTree(rightPre, rightVin)
      
     return root
}