/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var arr =[0,1,0];

 var moveZeroes = function(nums) {
     var j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j++] = nums[i]
        }
    }
    while(j < nums.length){
        nums[j++] = 0
    }
    return nums
};
 console.log(moveZeroes(arr));