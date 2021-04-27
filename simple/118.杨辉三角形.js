// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    let allArr = [[1], [1, 1]]
    let i = 3
    while(numRows >= i) {
        let arr = new Array(i)
        arr[0] = 1
        arr[i - 1] = 1
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = allArr[i - 2][j - 1] + allArr[i - 2][j] 
        }
        allArr.push(arr)
        i++
    }
    return allArr
};

console.log(generate(5))