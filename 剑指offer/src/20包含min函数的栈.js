/**
 * 定义栈的数据结构，请在该类型中
 * 实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。 
 */

 /**
  * 算是单调栈的应用？

    用数组模拟栈

    cur表示当前栈顶的位置

    minn数组中每个位置保存前面加进来的数中的最小值，只要push数的时候维护一下就好了
  */

let stack = []
let m = []
let curr = 0
 
function push(node)
{
    // write code here
  stack.push(node)
  curr++
  if(curr == 1) m.push(node)
  else m[curr - 1] = node < m[curr - 2] ? node : m[curr - 2]
}
function pop()
{
    // write code here
  if(curr == 0) return
  stack.pop()
  m.pop()
  curr--
}
function top()
{
    // write code here
  return stack[curr - 1]
}
function min()
{
    // write code here
  return m[curr - 1]
}