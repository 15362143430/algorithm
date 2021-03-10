// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 第一次遍历看pattern一个字母是否对应一个单词，第二次遍历看一个字母是否对应一个字母
var wordPattern = function(pattern, s) {
    const strArr = s.split(' ')
    if (pattern.length !== strArr.length) return false
    const length = pattern.length
    let map = new Map()
    for (let i = 0; i < length; i++) {
        let str = strArr[i], p = pattern[i]
        if (map.has(p) && map.get(p) !== str) {
            if (map.get(p) !== str)
            return false
        } else {
            map.set(p, str)
        }
    }
    map = new Map()
    for (let i = 0; i < length; i++) {
        let str = strArr[i], p = pattern[i]
        if (map.has(str) && map.get(str) !== p) {
            return false
        } else {
            map.set(str, p)
        }
    }
    return true
};

console.log(wordPattern("jquery", "jquery"))