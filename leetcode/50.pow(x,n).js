/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000

示例 2:

输入: 2.10000, 3
输出: 9.26100

示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25

说明:

    -100.0 < x < 100.0
    n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    var sum = 1
   for (let i = Math.abs(n); i != 0 ; i = Math.floor(i /2)) {
       if (i % 2 != 0) {
           sum *= x
       }
       x *= x
   }
   sum = n > 0? sum : 1/sum
    sum = sum.toFixed(5)
    return sum
};
console.log(myPow(2,-2))

/**
 * 使用折半计算，每次把n缩小一半，这样n最终会缩小到0，任何数的0次方都为1。
 * 这时候我们再往回乘，如果此时n是偶数，直接把上次递归得到的值算个平方返回即可。
 * 如果是奇数，则还需要乘上个x的值。
 * 还有一点需要引起我们的注意的是n有可能为负数，对于n是负数的情况，我们可以先用其绝对值计算出一个结果再取其倒数即可。
 * 我们让i初始化为n，然后看i是否是2的倍数，是的话x乘以自己，否则sum乘以x，i每次循环缩小一半，直到为0停止循环。最后看n的正负，如果为负，返回其倒数。
 */


var myPow2 = function(x, n) {
    var digitWidth = Math.floor(Math.log2(n))
    var t = 1
    
    while (digitWidth >= 0) {
        var d = (n >> digitWidth) % 2
        if (d == 1) {
            t = t * t * x
        } else {
            t = t * t
        }
        digitWidth--
    }
    
    return t
};

var myPow3 = function(x, n) {
    var result = 1
    var t = x
    var m = 1
    while (n > 0) {
        if (m * 2 <= n) {
            t = t * t
            m = m * 2
        } else {
            result *= t
            n = n - m
            t = x
            m = 1
        }
    }
	return result
};

function myPow4(x, n) {
    var t = x
    var r = 1
  
    while(n > 0) {
      var d = n % 2
      if (d) {
        r *= t
      }
      t = t * t
      n = n >> 1
    }
    
    return r
  }
  
