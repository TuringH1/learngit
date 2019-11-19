/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var a1 = reverse(a)
    var b1 = reverse(b)
    var arr =[]
    for (let i = 0; ; i++) {
        if (i < a1.length && i < b1.length) {
            arr[i] = Number(a1[i]) + Number(b1[i])
        }else if (i < a1.length) {
            arr[i] = Number(a1[i])
        }else if (i < b1.length) {
            arr[i] = Number(b1[i])
        }else{
            break
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 2) {
            arr[i] %= 2
            if (i != arr.length - 1) {
                arr[i + 1]++
            }else{
                arr.push(1)
            }
        }
    }
    var result = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i]
    }
    return result
};
var reverse = function(num){
    var str = ''
    for (let i = num.length - 1; i >= 0; i--) {
        str += num[i]
    }
    return str
}
console.log(addBinary('1111','1111'))