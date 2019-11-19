/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
示例 1:
输入: [2,2,1]
输出: 1
示例 2:
输入: [4,1,2,1,2]
输出: 4
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arr=[2,2,1];

 var singleNumber = function(nums) {
    var result=0;
    for (var i = 0; i < nums.length; i++) {
       result^=nums[i];
        
    }
    return(result);
};
console.log(singleNumber(arr));
/**
 * 交换律：a ^ b ^ c <=> a ^ c ^ b
任何数于0异或为任何数 0 ^ n => n
相同的数异或为0: n ^ n => 0
所以用异或运算，从开头算到结尾，
所有出现两次的数字都会抵消成0
结果就是只出现一次的数字
 */

var singleNumber1 = function(nums) {
   var seen = []
   for (var i = 0; i < nums.length; i++) {
       var num = nums[i]
       var idx = seen.indexOf(num)
       if (idx >= 0) {
           seen.splice(idx, 1)
       } else {
           seen.push(num)
       }
   }
   return seen[0]
};
