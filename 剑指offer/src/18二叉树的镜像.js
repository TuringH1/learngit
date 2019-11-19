/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。 
 */
/**
 * 递归写法
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root) {
        let l = Mirror(root.left)
        let r = Mirror(root.right)
        root.left = r
        root.right = l
        return root
    }
}