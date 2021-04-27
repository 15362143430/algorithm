// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

//  

// 示例 1：

// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。
// 示例 2：

// 输入：[1, 2]
// 输出：2
// 解释：第三大的数不存在, 所以返回最大的数 2 。
// 示例 3：

// 输入：[2, 2, 3, 1]
// 输出：1
// 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
// 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = [...new Set(nums)].sort((a, b) => b - a)
    if (nums.length < 3) return Math.max(...nums)
    return nums[2]
};

console.log(thirdMax([1, 2]))