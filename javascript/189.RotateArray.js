/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的原地算法。
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var arr=[1,2,3,4,5,6,7];
var k=2;
 var rotate = function(nums, k) {
    var n = nums.length;
    k %= n;
    for (let i = 0; i < k; i++) {
        var temp =nums[n-1];
        for (let j = n-1; j >0; j--){
            nums[j]=nums[j-1];     
        }
        nums[0]=temp;
    }
 return(nums);
};

console.log(rotate(arr,k));