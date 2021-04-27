// 示例 1：

// 输入："hello"
// 输出："holle"
// 示例 2：

// 输入："leetcode"
// 输出："leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('')
    let start = 0, end = s.length - 1, arr = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    while (start < end) {
        if (arr.has(s[start]) && arr.has(s[end])) {
            [s[start], s[end]] = [s[end], s[start]]
            start++
            end--
        } else if (arr.has(s[start])) {
            end--
        } else {
            start++
        }
    }
    return s.join('')
};
console.log(reverseVowels("leetcode"))