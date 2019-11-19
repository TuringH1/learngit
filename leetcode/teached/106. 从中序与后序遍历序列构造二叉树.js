/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]

返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
if (inorder.length == 0) {
    return null
}
var l = inorder.length 
var rootVal = postorder[l - 1]
var rootPos = inorder.indexOf(rootVal)

var leftInorder = inorder.slice(0, rootPos)
var rightInorder = inorder.slice(rootPos + 1)

var leftPostorder = postorder.slice(0, leftInorder.length)
var rightPostorder = postorder.slice(leftInorder.length, l -1)

var root = new TreeNode(rootVal)
root.left = buildTree(leftInorder, leftPostorder)
root.right = buildTree(rightInorder, rightPostorder)

return root
};