// 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 3
// 输出: [1,3,3,1]
// 进阶：

// 你可以优化你的算法到 O(k) 空间复杂度吗？

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    let allArr = [[1], [1, 1]]
    let arr = []
    let i = 3
    while (rowIndex + 1 >= i) {
        arr = new Array(i)
        arr[0] = 1
        arr[i - 1] = 1
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = allArr[i - 2][j - 1] + allArr[i - 2][j]
        }
        allArr.push(arr)
        i++
    }
    return arr
};