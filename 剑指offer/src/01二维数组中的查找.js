/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。 
 */

 /**
  * 解题思路：
  * 从左向右，从上到下递增，选取左下角的元素item
  * 如果target比item大，则必在右边，col++
  * 如果target比item小，则必在上面，row--
  */

function Find(target, array)
{
    // write code here
    if(!array.length){
        return false
    }
    var row = array.length - 1
    var col = array[0].length - 1
    for(let i = row,j = 0; i >= 0 && j <= col;){
        if(target >array[i][j]){
            j++
        } else if(target < array[i][j]){
            i--
        }else {
            return true
        }
    }
    return false
}