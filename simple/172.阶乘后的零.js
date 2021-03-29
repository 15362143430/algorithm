// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 示例 1:

// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。
// 示例 2:

// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res=0;
    while(n>=5){
        let k=Math.floor(n/5);
        res+=k;
        n=k;
    }
    return res;
};
console.log(trailingZeroes(30))