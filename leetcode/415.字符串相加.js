/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

注意：

    num1 和num2 的长度都小于 5100.
    num1 和num2 都只包含数字 0-9.
    num1 和num2 都不包含任何前导零。
    你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var str1 = reverse(num1)
    var str2 = reverse(num2)
    var arr = []
    for (let i = 0;  ; i++) {
        if (i < num1.length && i < num2.length) {
            arr[i] = Number(str1[i]) + Number(str2[i]) 
        }else if (i < num1.length) {
            arr[i] = Number(str1[i])
        }else if (i < num2.length) {
            arr[i] = Number(str2[i])
        }else{
            break
        }
    }
    
    for (let i = 0; i < arr.length ; i++) {
        if (i == arr.length - 1) {
            if (arr[i] >= 10) {
                arr[i] -= 10
                arr.push(1)
            }
        }else{
            if (arr[i] >= 10) {
                arr[i] -= 10
                arr[i + 1]++
            }
        }
    }
    
    var result = ''
    for (let i = arr.length - 1; i >= 0 ; i--) {
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
console.log(addStrings('9','1'))