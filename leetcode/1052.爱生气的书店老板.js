/**
 * 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。
在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。
书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。
请你返回这一天营业下来，最多有多少客户能够感到满意的数量。
 
示例：
输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
输出：16
解释：
书店老板在最后 3 分钟保持冷静。
感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 
提示：
1 <= X <= customers.length == grumpy.length <= 20000
0 <= customers[i] <= 1000
0 <= grumpy[i] <= 1
 */
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var arr = [1,0,1,2,1,1,7,5];
var brr = [0,1,0,1,0,1,0,1];
var Y = 3;
var maxSatisfied = function(customers, grumpy, X) {
    var sum = 0,add_sum = 0,max_add_sum = 0;
    for (let i = 0; i < customers.length; i++) {
        /*老板不使用控制情绪方法时顾客满意度的 */
        sum += grumpy[i] ? 0 : customers[i];
        /**add_sum表示以当前的第i分钟为老板控制情绪的最后一分钟时，增加的顾客满意度
         * 用了滑动窗口的思想：
         * 加一个当前分钟增加的顾客满意度
         * 减去一个i-X分钟的增加顾客满意度
         * 使得add_sum始终是X分钟的增加顾客满意度，并且随着i滑动
          */
        add_sum += grumpy[i] ? customers[i] : 0;
        add_sum -= grumpy[i-X] ? customers[i-X] : 0;
        max_add_sum = max_add_sum > add_sum ? max_add_sum : add_sum;
    }
    return max_add_sum + sum;
};
console.log(maxSatisfied(arr,brr,Y));