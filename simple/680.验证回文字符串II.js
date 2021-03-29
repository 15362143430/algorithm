// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0, end = s.length - 1, sum = 0
    while(start < end) {
        // console.log(s[start], s[end])
        // start++
        // end--
        if (s[start] === s[end]) {
            start++
            end--
        } else {
            if (s[start + 1] === s[end]) {
                start++
            } else if (s[start] === s[end - 1]) {
                end--
            } else if (s[start + 1] === s[end] && s[start] === s[end - 1]) {
                return false
            } else {
                return false
            }
            sum++
            if (sum > 1) return false
        }
    }
    return true
};

var validPalindrome = function(s, flag = true) {
    let l = 0, r = s.length - 1;
    while (l < r && s[l] === s[r]) l++, r--;
    if (r <= l) return true;
    if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
    return false;
};

console.log(validPalindrome("lcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucul"))