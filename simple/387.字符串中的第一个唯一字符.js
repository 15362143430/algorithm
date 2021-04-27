// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

//  

// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2
//  

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        if (!s.includes(s[i], i + 1) && !obj[s[i]]) {
            return i
        }
        if (s.includes(s[i], i + 1)) {
            obj[s[i]] = 1
        }
    }
    return -1
};

console.log(firstUniqChar(''))