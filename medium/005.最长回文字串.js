// 给你一个字符串 s，找到 s 中最长的回文子串。

//  

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"

/**
 * @param {string} s
 * @return {string}
 */
// 偶数个或者奇数都要试一次
var longestPalindrome = function (s) {
    if (s === '') return ''
    let longStr = ''
    let tempLongStr = ''
    let tempLongStr1 = ''
    let tempLongStr2 = ''
    let num = 1
    for (let i = 0; i < s.length; i++) {
        tempLongStr1 = s[i]
        while (s[i - num] && s[i + num] && s[i - num] === s[i + num]) {
            console.log()
            tempLongStr1 = s[i - num] + tempLongStr1 + s[i + num]
            num++
        }
        num = 1
        console.log(i, tempLongStr1)
        if (s[i] === s[i + 1]) {
            tempLongStr2 = i === s.length - 1 ? s[i] : s[i] + s[i + 1]
            while (s[i - num] && s[i + num + 1] && s[i - num] === s[i + num + 1]) {
                tempLongStr2 = s[i - num] + tempLongStr2 + s[i + num + 1]
                num++
            }
            num = 1
            console.log(i, tempLongStr2)
        }
        tempLongStr = tempLongStr1.length > tempLongStr2.length ? tempLongStr1 : tempLongStr2
        console.log(3, tempLongStr)
        if (tempLongStr.length > longStr.length) {
            longStr = tempLongStr
        }
        tempLongStr1 = ''
        tempLongStr2 = ''
    }
    return longStr
};

console.log(longestPalindrome("aacabdkacaa"))