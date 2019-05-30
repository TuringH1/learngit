/**
 * @param {number[]} deck
 * @return {boolean}
 */

 /*a，b是否有公约数
没有有则返回true，那么无法找到那个数X，可以直接return false
有公约数，则返回false
 */
var isPrime = function(a, b) {
    if (b > a) {
      let temp = a;
      a = b;
      b = temp;
    }
    while (a % b) {
      let temp = b;
      b = a % b;
      a = temp;
      if (b === 1) return true;
    }
    return false;
  }
  
  var hasGroupsSizeX = function(deck) {
      const len = deck.length;
      if (len < 2) {
        return false;
      } else if (len === 2) {
        if (deck[0] === deck[1]) {
          return true
        } else {
          return false;
        }
      } else {
        let obj = {}, arr = [], min;
        for (let i = 0; i < len; i ++) {
          obj[deck[i]] = obj[deck[i]] ? obj[deck[i]] + 1 : 1;
        }
        min = obj[deck[0]]
        for (let e in obj) {
          if (obj[e] < 2) {
            return false;
          } else {
            arr.push([obj[e]])
          }
          min = min > obj[e] ? obj[e] : min ;
        }
        for (let j = 0; j < arr.length; j ++) {
          // 如果是质数则返回false
          if (isPrime(arr[j], min)) return false
        }
        return true
      }
  };