/*
有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。
现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
示例 1:
输入: 
bits = [1, 0, 0]
输出: True
解释: 
唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
示例 2:
输入: 
bits = [1, 1, 1, 0]
输出: False
解释: 
唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
注意:
1 <= len(bits) <= 1000.
bits[i] 总是0 或 1.
*/
var bits=[1,0,0,1,0,1,0,1,0,0];
var isOneBitCharacter = function(bits) {
    
    var len=bits.length -1;
    var i =0;
    while(i<len){
        if (bits[i]==1) {
            i+=2;
        }
        else{
            i+=1;

        }
    }
    return i == len;
};
console.log(isOneBitCharacter(bits));
/*
思路：
定义一个变量len = 数组长度 -1
因为最后一位肯定是零，所以不用管
定义变量i，用来记录已确认过的数组元素，开始循环
当i<l时，如果bits[i]==1,那么该字符肯定是2bit字符，i+=2;
如果不是1，那么只能是0，该字符是1bit字符，i+=1;
完成循环之后，如果i==l，说明最后一个字符是1bit的字符，返回ture，
反之则为false
*/