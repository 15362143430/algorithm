// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：答案中不可以包含重复的四元组。

//  

// 示例 1：

// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：

// 输入：nums = [], target = 0
// 输出：[]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function (nums, target) {
//     var res = [{}, []]
//     nums.sort((a, b) => a - b)
//     for (var i = 0, len = nums.length, key; i < len - 3; i++) {
//         for (var j = i + 1; j < len - 2; j++) {
//             var l = j + 1, r = len - 1, sum = nums[i] + nums[j]
//             while (l < r) {
//                 if (sum + nums[l] + nums[r] === target) {
//                     var key = '' + nums[i] + nums[j] + nums[l] + nums[r]
//                     !res[0][key] && res[1].push([nums[i], nums[j], nums[l], nums[r]]) && (res[0][key] = 1)
//                     r--
//                 } else {
//                     sum + nums[l] + nums[r] > target && r-- || l++
//                 }
//             }
//         }
//     }
//     return res[1]
// };

var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    console.log(nums)
    let arr = [], len = nums.length - 1
    for (let j = 0; j < len - 1; j++) {
        let num = nums[j]
        console.log(num)
        if (num === nums[j - 1]) continue
        for (let i = j + 1; i < len - 1; i++) {
            let num1 = nums[i]
            if (num1 === nums[i - 1] && i !== j + 1) continue
            let start = i + 1, end = len
            while (start < end) {
                let num2 = nums[start], num3 = nums[end]
                let sum = num + num1 + num2 + num3
                if (sum === target) {
                    arr.push([num, num1, num2, num3])
                    // 最关键一步，去重
                    while (start < end && nums[start] === num2) start++
                    while (start < end && nums[end] === num3) end--
                } else if (sum > target) {
                    end--
                } else {
                    start++
                }
            }
        }
    }
    return arr
};

console.log(fourSum([-1, 1, 0, 0, 0, 0], 0))