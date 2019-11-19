/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

n<=39 
 */

 /**
  * 递归
  * 每次只记录两个状态
  */

function Fibonacci(n)
{
    // write code here
    let f = 0,g = 1
    while(n--) {
        g += f
        f = g - f
    }
    return f
}