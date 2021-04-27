// 给定一个二进制数组， 计算其中最大连续 1 的个数。

//  

// 示例：

// 输入：[1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function (nums) {
//     let low = 0, fast = 0, max = 0, tempMax = 0
//     while (fast < nums.length) {
//         let lowNum = nums[low], fastNum = nums[fast]
//         if (!lowNum || !fastNum) {
//             low++
//             fast = low
//             tempMax = 0
//         } else {
//             tempMax++
//             fast++
//         }
//         max = Math.max(max, tempMax)
//     }
//     return max
// };

var findMaxConsecutiveOnes = function (nums) {
    let max = 0, count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if(++count > max) {
                max = count
            }
        } else {
            count = 0
        }
    }
    return max
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1]))