// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

//  

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：6
// 示例 2：

// 输入：nums = [1,2,3,4]
// 输出：24
// 示例 3：

// 输入：nums = [-1,-2,-3]
// 输出：-6

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumProduct = function (nums) {
//     let length = nums.length
//     if (length === 3) return nums[length - 1] * nums[length - 2] * nums[length - 3]
//     nums.sort((a, b) => a - b)
//     console.log(nums)
//     let neg = nums.filter(item => item < 0), negLen = neg.length
//     let pos = nums.filter(item => item >= 0), posLen = pos.length
//     if (posLen === 0) return neg[negLen - 1] * neg[negLen - 2] * neg[negLen - 3]
//     let num1 = negLen < 2 ? 0 : neg[0] * neg[1] * pos[posLen - 1],
//         num2 = posLen < 3 ? pos[posLen - 1] : pos[posLen - 1] * pos[posLen - 2] * pos[posLen - 3]
//     return Math.max(num1, num2)
// };

var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a)
    console.log(nums)
    while(nums.length < 3) nums.push(1)
    console.log(nums)
    let max1 = nums[0] * nums[1] * nums[2]
    let max2 = nums[nums.length -1] * nums[nums.length - 2] * nums[0]
    return Math.max(max1, max2)
};
console.log(maximumProduct([-100,2]))