/**
 * 实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。

 */

 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var a = 0
    var b = x
    var mid = (a + b)/2
    var z = 0.000001
    while(Math.abs(mid * mid - x) >= z){
        mid = (a + b)/2 | 0
        if (mid*mid > x) {
            b = mid
        }else if(mid * mid < x){
            a = mid
        }else{
            return mid
        }
    }
    mid = Number(Math.floor(mid))
    return mid
};
console.log(mySqrt(10000))