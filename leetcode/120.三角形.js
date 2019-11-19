/**
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var cache = {}
    return minCollect(0,0)
   

    function minCollect(row , col){
        var key = row + ',' + col
        if (key in cache) {
            return cache[key]
        }

        if (row == triangle.length - 1) {
            return triangle[row][col]
        }

        cache[key] = triangle[row][col] + Math.min(minCollect(row + 1,col),minCollect(row + 1,col + 1))

        return cache[key]
        
    }
    
};



/**
 * 备忘录
 * 从头开始，最短路径为当前节点加上其左右俩孩子节点的最短路径
 * 用cache的key记录计算过的节点路径，避免重复计算
 */

var minimumTotal2 = function(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }
    return triangle[0][0]
}

/**
 * 从下往上，从倒数第二行开始，直接更新树中的节点
 * 最后triaangle[0][0]就是要求的结果
 */