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
    // 判断该数字正数或者是负数
    const flag = x < 0 ? -1 : 1
    // old：对该数字取绝对值，方便后面以正数来计算
    let old = Math.abs(x)
    // new：用来存储新数字
    let now = 0
    while (old > 0) {
        // old每次都对10取余，并且now乘10与之相加
        now = now * 10 + old % 10
        // 然后old除以10并取floor，准备下一次运算
        old = Math.floor(old / 10)
    }
    // 正负运算
    now = flag * now
    // 判断是否超出区间
    return now < Math.pow(-2, 31) || now > Math.pow(2, 31) - 1 ? 0 : now
};

console.log(reverse(-237))