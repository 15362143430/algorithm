// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

// 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

//  

// 示例 1:

// 输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出: [-1,3,-1]
// 解释:
//     对于 num1 中的数字 4 ，你无法在第二个数组中找到下一个更大的数字，因此输出 -1 。
//     对于 num1 中的数字 1 ，第二个数组中数字1右边的下一个较大数字是 3 。
//     对于 num1 中的数字 2 ，第二个数组中没有下一个更大的数字，因此输出 -1 。
// 示例 2:

// 输入: nums1 = [2,4], nums2 = [1,2,3,4].
// 输出: [3,-1]
// 解释:
//     对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
//     对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//     let arr = []
//     for (let i = 0; i < nums1.length; i++) {
//         const num1 = nums1[i], index2 = nums2.indexOf(num1), num2 = nums2.find((item, index) => index > index2 && item > num1)
//         arr.push(num2 ? num2 : -1)
//     }
//     return arr
// };

// 压栈法
var nextGreaterElement = function (nums1, nums2) {
    let map = new Map(), arr = [nums2[0]]
    for (let i = 1; i < nums2.length; i++) {
        const num = nums2[i]
        if (num > arr[0]) {
            map.set(arr.shift(), num)
            i--
        } else {
            arr.unshift(num)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], -1)
    }
    arr = []
    for (let i = 0; i < nums1.length; i++) {
        arr.push(map.get(nums1[i]))
    }
    return arr
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))