// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

//  

// 示例 1：

// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
// 示例 2：

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。
// 示例 3：

// 输入：digits = [0]
// 输出：[1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = 1, digit
    for(let i = digits.length - 1; i >= 0; i--) {
        digit = digits[i] + num
        if (digit >= 10) {
            num = 1
            digits[i] = 0
        } else {
            num = 0
            digits[i] = digit
        }
    }
    if (digit >= 10) {
        digits.splice(0, 0, 1)
    }
    return digits
};

console.log(plusOne([9,9,9,8]))