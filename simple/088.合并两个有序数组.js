
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。



// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * [1,2,5, 0, 0, 0, 0]  [2, 3, 4, 6]
 */
var merge = function (nums1, m, nums2, n) {
    let p = m + n - 1
    m = m > 0 ? m - 1 : 0
    n = n - 1
    while (m >= 0 && n >= 0) {
        console.log(m, n, p, nums1)
        if (nums1[m] <= nums2[n]) {
            nums1[p] = nums2[n]
            n--
        } else {
            nums1[p] = nums1[m]
            m--
        }
        p--
    }
    while (n >= 0) {
        nums1[p--] = nums2[n]
    }
    return nums1
};
console.log(merge([1, 2, 5, 0, 0, 0, 0], 3, [2, 3, 4, 6], 4))