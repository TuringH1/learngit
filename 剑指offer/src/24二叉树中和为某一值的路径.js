/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下
 * 一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前) 
 */


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
 
 
function FindPath(root, expectNumber)
{
    // write code here
let res = []
 find(root, expectNumber, [], 0, res)
 return res
}
 
function find(root, tar, path, curr, res) {
    if(root == null){
      return res
    }
    path.push(root.val)
    curr += root.val
    if(curr == tar && root.left == null &&root.right == null) {
      
      res.push(path.slice(0))
    }
    find(root.left, tar, path, curr, res)
    find(root.right, tar, path, curr, res)
    // 移除根节点
    path.pop()
     
  }