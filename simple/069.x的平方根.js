// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     let sqrtNum = 0
//     while (sqrtNum * sqrtNum < x) {
//         sqrtNum++
//     }
//     return sqrtNum * sqrtNum > x ? sqrtNum - 1 : sqrtNum
// };

// 二分法，在[0, x/2 + 1]中找
var mySqrt = function(x) {
    let start = 0 , end = (x >> 1) + 1, mid = 0
    while (start <= end) {
        console.log(start, end)
        mid = (start + end) >> 1
        let num = mid * mid
        if (num < x) {
            start = mid + 1
        } else if (num > x) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return end
};

console.log(mySqrt(8))