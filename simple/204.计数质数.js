// 统计所有小于非负整数 n 的质数的数量。

//  

// 示例 1：

// 输入：n = 10
// 输出：4
// 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
// 示例 2：

// 输入：n = 0
// 输出：0
// 示例 3：

// 输入：n = 1
// 输出：0

/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     let sum = 0
//     let num = 1
//     let flag = true
//     while(n > 1) {
//         while(num < n) {
//             if (n % num === 0) {
//                 flag = false
//                 break
//             }
//             num++
//         }
//         if (flag) {
//             sum++
//         }
//         flag = true
//         num = 2
//         n--
//     }
//     return sum
// };

// 厄拉多塞筛法
var countPrimes = function (n) {
    if (n <= 2) return 0
    let arr = new Array(n).fill(true)
    arr[0] = false, arr[1] = false
    for (let i = 2; i * i < n; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false
            }
        }
    }
    return arr.filter(item => item).length
};
console.log(countPrimes(5))

