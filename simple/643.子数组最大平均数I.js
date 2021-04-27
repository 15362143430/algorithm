// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

//  

// 示例：

// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//     let low = 0, fast = k - 1, max = -Infinity
//     while (fast < nums.length) {
//         let tempMax = 0
//         for(let i = low; i <= fast; i++) {
//             tempMax += nums[i]
//         }
//         console.log(tempMax)
//         max = Math.max(tempMax / k, max)
//         low++
//         fast = low + k - 1
//     }
//     return max
// };

var findMaxAverage = function (nums, k) {
    let max = -Infinity, num = 0
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            num += nums[i]
        } else {
            max = Math.max(max, num)
            num = num + nums[i] - nums[i - k]
        }
    }
    return Math.max(max, num) / k
};
console.log(findMaxAverage([5], 1))