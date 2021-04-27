// 16. 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。



// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let min = Infinity, sum = 0
    for (let i = 0; i < nums.length; i++) {
        let tempMin = Infinity, tempSum = 0,
            start = i + 1,
            end = nums.length - 1
        while (start < end) {
            let whileSum = nums[i] + nums[start] + nums[end]
            if (Math.abs(target - whileSum) < tempMin) {
                tempMin = Math.abs(target - whileSum)
                tempSum = whileSum
            }
            if (whileSum > target) {
                end--
            } else {
                start++
            }
        }
        if (tempMin < min) {
            min = tempMin
            sum = tempSum
        }
    }
    return sum
};
console.log(threeSumClosest([-1, 2, 1, -4], 1))