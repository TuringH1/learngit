/**
 * 给定一个正整数 N，找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离。 

如果没有两个连续的 1，返回 0 。

 

示例 1：

输入：22
输出：2
解释：
22 的二进制是 0b10110 。
在 22 的二进制表示中，有三个 1，组成两对连续的 1 。
第一对连续的 1 中，两个 1 之间的距离为 2 。
第二对连续的 1 中，两个 1 之间的距离为 1 。
答案取两个距离之中最大的，也就是 2 。

示例 2：

输入：5
输出：2
解释：
5 的二进制是 0b101 。

示例 3：

输入：6
输出：1
解释：
6 的二进制是 0b110 。

示例 4：

输入：8
输出：0
解释：
8 的二进制是 0b1000 。
在 8 的二进制表示中没有连续的 1，所以返回 0 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-gap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    var sum = 1
    var count = 0
    var max = 0
   while (N) {
       if (N % 2 == 1) {
           if (sum > max && count == 1) {
               max = sum
            }
               count = 1
               sum = 1
       }else{
           sum++
       }
       N = Math.floor(N / 2)
   }
   return max
};
console.log(binaryGap(13))

/**
 * 每次除二，并且向下取整，相当于右移一位
 * 判断取2的模是否为1，即二进制最右边是否为1
 * 
 */