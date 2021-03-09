// 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
//  

// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0

/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     const flag = x < 0 ? -1 : 1
//     x = Math.abs(x)
//     const num =  flag * (x + '').split('').reverse().join('')
//     return num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1 ? 0 : num
// };

// 优解

var reverse = function(x) {
    const flag = x < 0 ? -1 : 1
    let old = Math.abs(x)
    let now = 0
    while (old > 0) {
        now = now * 10 + old % 10
        old = Math.floor(old / 10)
    }
    now = flag * now
    return now < Math.pow(-2, 31) || now > Math.pow(2, 31) - 1 ? 0 : now
};

console.log(reverse(-237))