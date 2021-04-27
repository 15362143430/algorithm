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
    // 如果strs长度为0则直接返回空字符串
    if (!strs.length) return ''
    // longPrefix：用来存储最长前缀
    let longPrefix = ''
    let i = 0
    // 以第一个单词为基准进行遍历
    while (strs[0][i]) {
        // 单词的每一个字母
        let first = strs[0][i]
        if (strs.some(item => item[i] !== first)) {
            // 遍历strs，只要有一个单词的第i个字母跟第一个单词的第i哥字母不一样就返回当前longPrefix
            return longPrefix
        } else {
            // 否则，longPrefix继续拼接
            longPrefix += first
        }
        i++
    }
    return longPrefix
};
console.log(longestCommonPrefix(["cir", "car"]))