// 写一个程序，输出从 1 到 n 数字的字符串表示。

// 1. 如果 n 是3的倍数，输出“Fizz”；

// 2. 如果 n 是5的倍数，输出“Buzz”；

// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

// 示例：

// n = 15,

// 返回:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function(n) {
//     let arr = [], i = 1
//     while(i <= n) {
//         let str = i + ''
//         if (i % 3 === 0 && i % 5 === 0) {
//             str = 'FizzBuzz'
//         } else if (i % 3 === 0) {
//             str = 'Fizz'
//         } else if (i % 5 === 0) {
//             str = 'Buzz'
//         }
//         arr.push(str)
//         i++
//     }
//     return arr
// };

var fizzBuzz = function(n) {
    let arr = [], i = 1
    while(i <= n) {
        let str = i + ''
        if (i % 3 === 0 && i % 5 === 0) {
            str = 'FizzBuzz'
        } else if (i % 3 === 0) {
            str = 'Fizz'
        } else if (i % 5 === 0) {
            str = 'Buzz'
        }
        arr.push(str)
        i++
    }
    return arr
};

console.log(fizzBuzz(15))