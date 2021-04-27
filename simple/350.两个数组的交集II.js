// 给定两个数组，编写一个函数来计算它们的交集。

//  

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    return nums1.filter(item => {
        const index = nums2.indexOf(item)
        if (index !== -1) {
            nums2.splice(index, 1)
            return true
        } else {
            return false
        }
    })
};
console.log(intersect([1, 2, 2, 1], [2]))