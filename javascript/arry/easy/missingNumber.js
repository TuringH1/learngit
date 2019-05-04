/**
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
示例 1:
输入: [3,0,1]
输出: 2
示例 2:
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arr=[2,5,4,0,1]
 var missingNumber = function(nums) {
   
    var len = nums.length;
    var sum =0;
    for (let i = 0; i < len; i++) {
        sum +=nums[i];
    }
    var a=len*(len+1)/2;
    return a-sum;
};    
    
console.log(missingNumber(arr));
/**
 * 要找出0……n数组中缺失的那个数
 * 先设一个变量l记录数组的长度
 * 然后a=l*（l+1）/2
 * 再求数组的和sum
 * 那么a-sum就是缺失的那个数字
 */