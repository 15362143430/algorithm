// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

//  

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    let longPrefix = ''
    let i = 0
    while (strs[0][i]) {
        let first = strs[0][i]
        console.log(first)
        if (strs.some(item => item[i] !== first)) {
            return longPrefix
        } else {
            longPrefix += first
        }
        i++
    }
    return longPrefix
};
console.log(longestCommonPrefix(["cir", "car"]))