/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.

 

注意事项：您可以假定该字符串只包含小写字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var countMap = {}
    
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (char in countMap) {//字母
            countMap[char]++//出现的次数
        } else {
            countMap[char] = 1//第一次出现
        }
    }
    
    for (var i = 0; i < s.length; i++) {//从头遍历
        var char = s[i]
        if (countMap[char] == 1) {//第一次唯一的
            return i
        }
    }
    
    return -1
};
