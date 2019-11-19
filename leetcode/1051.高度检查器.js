/*
 * 拍年度纪念照时，要求学生按照 非递减 的高度顺序排列。
返回没有站在正确位置的最小学生人数。（该人数是能让所有学生以不递减高度排列的必要移动人数。）
 
示例：
输入：[1,1,4,2,1,3]
输出：3
解释：
高度为 4、3 和最后一个 1 的学生没有站在正确的位置。
 * 
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var foo = [1,1,4,2,1,3];

var heightChecker = function(heights){
    var arr = [];
    for (let i = 0; i < heights.length; i++) {
        arr[i] = heights[i];
    }
    arr.sort(function(a,b){
        return a - b;
    })
    var count = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] != heights[i]) {
           count++;
       }
   }
   return count;
};

console.log(heightChecker(foo));
