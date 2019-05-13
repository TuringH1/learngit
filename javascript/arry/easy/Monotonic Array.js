/**
 * 如果阵列单调递增或单调递减，则阵列是单调的。

数组A是单调的，如果所有的增加i <= j，A[i] <= A[j]。A如果对所有人来说i <= j，数组是单调减少的A[i] >= A[j]。

返回true当且仅当给定的数组A是单调的。

 

例1：

输入：[1,2,2,3] 
输出：true
例2：

输入：[6,5,4,4] 
输出：true
例3：

输入：[1,3,2] 
输出：false
例4：

输入：[1,2,4,5] 
输出：true
例5：

输入：[1,1,1] 
输出：true
 

注意：

1 <= A.length <= 50000
-100000 <= A[i] <= 100000
 */

 /**
 * @param {number[]} A
 * @return {boolean}
 */
var B=[1,3,2]
 var isMonotonic = function(A) {
    for (var i = 0; i < A.length; i++) {
        if (A[i]!=A[i+1]) {
            break;
        }
        if (i==A.length-1) {
            return(true);
        }
    }
    var flag=(A[i]<A[i+1]);
    if(flag==1){
        for (let i = 1; i < A.length; i++) {
            if(A[i]>A[i+1])
            return(false);
        }
        return(true);
    }
    if(flag ==0){
        for (let j = 0; j < A.length; j++) {
            if(A[j]<A[j+1])
            return(false)
        }
        return(true);
    }
};
console.log(isMonotonic(B));
/**
 * 先用循环找出数组中不同的相邻数组元素，如果数组元素都相等，那么返回true
 * 如果找出了不同，那么判断这俩元素的大小关系，猜想数组的顺序，用flag来记录
 * flag=1，数组为升序，flag=0，那么为降序
 * 接下来判断数组中所有元素是否都与我妈的预想一致，
 * 一致，则为true
 * 不一致，则为false
 */