// 自除数 是指可以被它包含的每一位数除尽的数。

// 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

// 还有，自除数不允许包含 0 。

// 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

// 示例 1：

// 输入： 
// 上边界left = 1, 下边界right = 22
// 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const arr = []
    while (left <= right) { 
        let num = left, flag = true
        while(num !== 0) {
            if (left % (num % 10) !== 0) {
                flag = false
                break
            }
            num = Math.floor(num / 10)
        }
        flag && arr.push(left)
        left++
    }
    return arr
};

console.log(selfDividingNumbers(1, 22))