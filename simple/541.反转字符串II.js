// 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
//  

// 示例:

// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let start = 0, end = k - 1;
    s = s.split('')
    while (start < s.length) {
        let tempStart = start, tempEnd = end
        while (tempStart < tempEnd) {
            [s[tempStart], s[tempEnd]] = [s[tempEnd], s[tempStart]]
            tempStart++
            tempEnd--
        }
        start += 2 * k
        end = start + k - 1 < s.length ? start + k - 1 : s.length - 1
    }
    return s.join('')
};
console.log(reverseStr("A", 4))