/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10. 
 */

 /**
  * 
  * 

简单来说，就是不断地收缩矩阵的边界
定义四个变量代表范围，up、down、left、right

    向右走存入整行的值，当存入后，该行再也不会被遍历，
    代表上边界的 up 加一，同时判断是否和代表下边界的 down 交错

    向下走存入整列的值，当存入后，该列再也不会被遍历,
    代表右边界的 right 减一，同时判断是否和代表左边界的 left 交错

    向左走存入整行的值，当存入后，该行再也不会被遍历，
    代表下边界的 down 减一，同时判断是否和代表上边界的 up 交错

    向上走存入整列的值，当存入后，该列再也不会被遍历，
    代表左边界的 left 加一，同时判断是否和代表右边界的 right 交错 
  * 
  */

 function printMatrix(matrix)
 {
     // write code here
     if(matrix.length == 0)
         return null
     let up = 0
     let down = matrix.length - 1
     let left = 0
     let right = matrix[0].length - 1
     let res = []
     while(true) {
         for(let i = left;i <= right; i++) {
             res.push(matrix[up][i])
         }
         up++
          
         if(up > down){
             break
        }
         for(let i = up;i <= down; i++) {
             res.push(matrix[i][right])
         }
         right--
         if(left > right){break}
              
         for(let col = right;col >= left; col--){
             res.push(matrix[down][col])
         }
         down--
         if(up > down){
             break
         }
         for(let row = down;row >= up; row--){
             res.push(matrix[row][left])
         }
         left++
         if(left > right){
              break
         }
     }
     return res
      
 }