// 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

// 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。



//  

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
// 示例 2：

// 输入：matrix = [[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var transpose = function(matrix) {
//     let lengthColumn = matrix.length
//     let lengthRow = matrix[0].length
//     let arr = []
//     for(let i = 0; i < lengthRow; i++) {
//         let tempArr = []
//         for(let j = 0; j < lengthColumn; j++) {
//             tempArr.push(matrix[j][i])
//         }
//         arr.push(tempArr)
//     }
//     return arr
// };

// martix[0]真秒啊
var transpose = function(matrix) {
    return matrix[0].map((item, index) => matrix.map((item2) => item2[index]))
};

console.log(transpose([[]]))