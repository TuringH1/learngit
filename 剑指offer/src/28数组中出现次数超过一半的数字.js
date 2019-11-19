/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。 
 */

 /**
  * 如果有符合条件的数字，则它出现的次数比其他所有数字出现的次数和还要多。
在遍历数组时保存两个值：一是数组中一个数字，一是次数。遍历下一个数字时，
若它与之前保存的数字相同，则次数加1，否则次数减1；若次数为0，则保存下一个数字，并将次数置为1。
遍历结束后，所保存的数字即为所求。然后再判断它是否符合条件即可。 
  */

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
  let map = {}
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] in map) {
      map[numbers[i]]++
    } else {
      map[numbers[i]] = 1
    }
  }
  let max = 0
  let num
  for (let item in map) {
    if(map[item] > max) {
      max = map[item]
      num = item
    }
  }
  if(max > numbers.length / 2) {
    return num
  } else {
    return 0
  }
}