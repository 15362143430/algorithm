// 编写一个程序判断给定的数是否为丑数。

// 丑数就是只包含质因数 2, 3, 5 的正整数。

// 示例 1:

// 输入: 6
// 输出: true
// 解释: 6 = 2 × 3
// 示例 2:

// 输入: 8
// 输出: true
// 解释: 8 = 2 × 2 × 2
// 示例 3:

// 输入: 14
// 输出: false 
// 解释: 14 不是丑数，因为它包含了另外一个质因数 7。

/**
 * @param {number} n
 * @return {boolean}
 */
// var isUgly = function(n) {
//     if (n === 0) return false
//     if (n === 1) return true
//     while (!(n % 2) || !(n % 3) || !(n % 5)) {
//         if (n % 2 === 0) {
//             n = n / 2
//         }
//         if (n % 3 === 0) {
//             n = n / 3
//         }
//         if (n % 5 === 0) {
//             n = n / 5
//         }
//     }
//     return n === 1
// };
var isUgly = function(n) {
    if (n === 0) return false
    if (n === 1) return true
    let flag = true
    while (flag) {
        flag = false
        if (n % 2 === 0) {
            n = n / 2
            flag = true
        }
        if (n % 3 === 0) {
            n = n / 3
            flag = true
        }
        if (n % 5 === 0) {
            n = n / 5
            flag = true
        }
    }
    return n === 1
};
console.log(isUgly(8))