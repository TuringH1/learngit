/**
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

示例 1:

输入: 16
输出: true

示例 2:

输入: 5
输出: false

进阶：
你能不使用循环或者递归来完成本题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/power-of-four
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num <= 0) {
        return false
    }else{
        while (num >= 4) {
            if (num % 4 != 0) {
                return false
            }
            num /= 4
        }
        return num == 1
    }
};
console.log(isPowerOfFour(256))


var isPowerOfFour2 = function(n){
    if (n < 1) {
        return false
    }
    return ((n & (n - 1)) == 0) && n & 0x2aaaaaaa
}

/**
 * 0b10101010101010
 * 与上4的幂，4的幂必为100，10000
 * 之类的，两者相与结果为0
 * 0x2aaaaaaa 魔法数字 magic number
 */