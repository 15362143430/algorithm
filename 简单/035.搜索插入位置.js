// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 你可以假设数组中无重复元素。

// 示例 1:

// 输入: [1,3,5,6], 5
// 输出: 2
// 示例 2:

// 输入: [1,3,5,6], 2
// 输出: 1
// 示例 3:

// 输入: [1,3,5,6], 7
// 输出: 4
// 示例 4:

// 输入: [1,3,5,6], 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i]
//         if (num === target || num > target) {
//             return i
//         }
//     }
//     return nums.length
// };

// 二分法
var searchInsert = function(nums, target) {
    const len = nums.length
    if (!len || target < nums[0]) {
        return 0
    } else if (target > nums[len - 1]) {
        return len
    }
    let low = 0, high = len - 1
    while (low < high) {
        const index = Math.floor((low + high) / 2)
        const num = nums[index]
        if (num >= target) {
            high = index
        } else {
            low = index + 1
        }
    }
    return low
};
// var searchInsert = function(nums, target) {
//     const len = nums.length
//     if (!len || target < nums[0]) {
//         return 0
//     } else if (target > nums[len - 1]) {
//         return len
//     }
//     let start = 0, end = len - 1
//     while (start < end) {
//         const mid = (start + end) >>> 1
//         if (target > nums[mid]) {
//             start = mid + 1
//         } else {
//             end = mid
//         }
//     }
//     return start
// };
console.log(searchInsert([1, 3, 5, 6], 7))