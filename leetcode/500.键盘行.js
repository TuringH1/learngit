/**
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。



示例：

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/keyboard-row
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    var result = []
     var one = ['q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P']
     var two = ['a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L']
    var three = ['z','x','c','v','b','n','m','Z','X','C','V','B','N','M']
     var find = function(string, arr){
    for (let j = 1; j < string.length; j++) {
        if (arr.indexOf(string[j]) < 0) {
            return;
        }
    }
    result.push(string)
}
     for (let i = 0; i < words.length; i++) {
         if (one.indexOf(words[i][0]) >= 0) {
             find(words[i], one)
         }
         else if (two.indexOf(words[i][0]) >= 0) {
             find(words[i], two)
         }
         else if (three.indexOf(words[i][0]) >= 0) {
             find(words[i], three)
         }
     }
     return result

};

var findWords2 = function(words){
   words  = words.toLowerCase()
   var map = {
       q:0, w:0, e:0, r:0, t:0, y:0, u:0, i:0, o:0, p:0, 
       s:1, d:1, f:1, g:1, h:1, j:1, k:1, l:1, 
       z:2, x:2, c:2, v:2, b:2, n:2, m:2, 
   }
   var record = [0, 0, 0]
   for (let i = 0; i < words.length; i++) {
       var row = map[words[i]]
       console.log(row)
       record[row] = 1
   }

   return record[0] + record[1] + record[2]
}
findWords2(["Hello", "Alaska", "Dad", "Peace"])


