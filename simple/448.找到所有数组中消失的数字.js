// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]

// 输出:
// [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//     let len = nums.length
//     if (len <= 1) return []
//     nums = [...new Set(nums)]
//     let arr = [], map = new Map()
//     for (let i = 0; i < len; i++) {
//         let num = nums[i]
//         !map.has(num) && map.set(num, 1)
//     }
//     for (let i = 1; i <= len; i++) {
//         !map.has(i) && arr.push(i)
//     }
//     return arr
// };

// 所有数回到自己的坑位，没人占的坑就是缺的数字
var findDisappearedNumbers = function (nums) {
    let i = 0, len = nums.length
    while (i < len) {
        console.log(nums)
        let num = nums[i]
        if (i + 1 !== num) {
            if (nums[num - 1] === nums[i]) {
                i++
                continue
            }
            [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]]
        } else {
            i++
        }
    }
    let arr = []
    for (let i = 0; i < len; i++) {
        nums[i] !== i + 1 && arr.push(i + 1)
    }
    return arr
};
console.log(findDisappearedNumbers([2, 2]))