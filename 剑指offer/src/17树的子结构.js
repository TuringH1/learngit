/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * （ps：我们约定空树不是任意一个树的子结构） 
 */

 /* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    //当Tree1和Tree2都不为零的时候，才进行比较。否则直接返回false
    if(!pRoot1 || !pRoot2)
        return false
        //如果找到了对应Tree2的根节点的点
    if(pRoot1.val == pRoot2.val){
       //以这个根节点为为起点判断是否包含Tree2
        if(judge(pRoot1, pRoot2)){
            return true
        }
    }
    //如果还找不到，那么就再去root的左，右儿子当作起点，去判断时候包含Tree2
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}
 
function judge(root1, root2) {
   //如果Tree2已经遍历完了都能对应的上，返回true
    if(root2 == null)
        return true
         //如果Tree2还没有遍历完，Tree1却遍历完了。返回false
    if(root1 == null)
        return false
        //如果根节点对应的上，那么就分别去子节点里面匹配
    if(root1.val == root2.val)
        return judge(root1.left, root2.left) && judge(root1.right, root2.right)
    
         //如果其中有一个点没有对应上，返回false
    return false
}