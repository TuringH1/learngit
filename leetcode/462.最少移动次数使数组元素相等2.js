/**
 * 给定一个非空整数数组，找到使所有数组元素相等所需的最小移动数，其中每次移动可将选定的一个元素加1或减1。 您可以假设数组的长度最多为10000。

例如:

输入:
[1,2,3]

输出:
2

说明：
只有两个动作是必要的（记得每一步仅可使其中一个元素加1或减1）： 

[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    var arr = []
    nums.sort((a,b) => a - b)
    arr.push(nums[0])
    for (let i = 1,j = 0; i < nums.length; i++) {
        if (nums[i] != arr[j]) {
            j++
            arr[j] = nums[i]
        }
    }
    var sum = 0
    var min = 0
    for (let j = 0; j < arr.length; j++) {
        sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += Math.abs(arr[j] - nums[i])
        }
        if(j == 0)
            min = sum
        min = min < sum ? min : sum
    }
   
    return min
};


var minMoves2_2 = function(nums){
    nums.sort((a,b) => a - b)
    var i = 0
    var j = nums.length - 1
    var res = 0
    while(i < j){
        res += nums[j--] - nums[i++]
    }
    return res
}
console.log(minMoves2_2([1,2,3]))
/**
 * 那么顺着中位数的思路来想 
 * 假如数组长度为奇数2n+1
 *  则中位数两边各有n个数 
 * 设左边所有数和中位数的差值和为x 右边所有数和中位数的差值和为y 
 * 则所有需要移动的次数为x+y 
 * 如果不选择中位数 例如选择中位数-1 
 * 这样总的移动次数就变成了 >= ((x-n) + (y+n) + 1) 
 * 最好的情况下比中位数大1 
 * 如果数组长度是偶数 有两个中位数 选择两个中位数的任何一个或者两个中位数的平均数 都是可以的
 */