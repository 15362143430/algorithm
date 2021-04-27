// 给定两个字符串 s 和 t，它们只包含小写字母。

// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

// 请找出在 t 中被添加的字母。

//  

// 示例 1：

// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。
// 示例 2：

// 输入：s = "", t = "y"
// 输出："y"
// 示例 3：

// 输入：s = "a", t = "aa"
// 输出："a"
// 示例 4：

// 输入：s = "ae", t = "aea"
// 输出："a"

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (obj[item]) {
            obj[item] = obj[item] + 1
        } else {
            obj[item] = 1
        }
    }
    for (let i = 0; i < t.length; i++) {
        let item = t[i]
        if (obj[item]) {
            obj[item] = obj[item] - 1
        } else {
            return item
        }
    }
};
console.log(findTheDifference("ae", "eaa"))