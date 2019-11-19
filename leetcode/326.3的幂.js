/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

示例 1:

输入: 27
输出: true

示例 2:

输入: 0
输出: false

示例 3:

输入: 9
输出: true

示例 4:

输入: 45
输出: false
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false
    }else{
        while (n >= 3) {
            n /= 3
        }
        return n == 1
    }
};
console.log(isPowerOfThree(45))

//法2
var isPowerOfThree2 = function(n){
    if (n < 1) {
        return false
    }
    if ((3 ** 19) % n == 0) {
        return true
    }else{
        return false
    }
}
/**
 * 素数可以这么做
 * 3**19是2147483648(2 ** 31)内最大的3的次幂
 */