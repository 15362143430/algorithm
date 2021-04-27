// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

//  

// 示例 1：

// 输入：[3,2,3]
// 输出：3
// 示例 2：

// 输入：[2,2,1,1,1,2,2]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//     let len = nums.length, n = len / 2, map = new Map()
//     for (let i = 0; i < len; i++) {
//         let num = nums[i]
//         if (map.has(num)) {
//             map.set(num, map.get(num) + 1)
//         } else {
//             map.set(num, 1)
//         }
//         if (map.get(num) > n) {
//             return num
//         }
//     }
// };

var majorityElement = function(nums) {
    nums.sort()
    return nums[Math.round(nums.length / 2)]
};

console.log(majorityElement([1]))