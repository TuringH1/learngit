/**
 * 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个 正整数 n， 如果他是完美数，返回 True，否则返回 False

 

示例：

输入: 28
输出: True
解释: 28 = 1 + 2 + 4 + 7 + 14

 

注意:

输入的数字 n 不会超过 100,000,000. (1e8)

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/perfect-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

 /**
 * @param {number} num
 * @return {boolean}
 */


var isCompleteNumer = function(n) {
    if (n == 1) {
        return false
    }
    else{
    var sum = 1
  
    var sqrt_n = Math.floor(Math.sqrt(n))
  
    for (var i = 2; i <= sqrt_n; i++) {
      if (n % i == 0) {
        if (i == n / i) {//平方根
          sum += i
        } else {//非平方根
          sum += i + (n / i)
        }
      }
    }
  
    return sum == n
    }
  }
  
  console.log(isCompleteNumer(28))