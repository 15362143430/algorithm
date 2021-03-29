// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

//  
// 示例 1：

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
// 示例 2：

// 输入：numbers = [2,3,4], target = 6
// 输出：[1,3]
// 示例 3：

// 输入：numbers = [-1,0], target = -1
// 输出：[1,2]

// var twoSum = function(nums, target) {
//     // 设置一个map用来存储
//     const map = new Map()
//     for(let i = 0; i < nums.length ; i++) {
//         // 计算target与当前元素的差值
//         const chazhi = target - nums[i]
//         if (map.has(chazhi)) {
//             // 如果map里存在差值为key的情况，直接返回
//             return [map.get(chazhi) + 1, i + 1]
//         } else {
//             // 如果不存在则继续存储进map里
//             map.set(nums[i], i)
//         }
//     }
// };

var twoSum = function(nums, target) {
    let start = 0, end = nums.length - 1
    while(start < end) {
        let sum = nums[start] + nums[end]
        if (sum > target) {
            end--
        } else if (sum < target) {
            start++
        } else {
            return [start + 1, end + 1]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))