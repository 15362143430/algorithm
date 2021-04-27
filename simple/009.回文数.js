// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

//  

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false

/**
 * @param {number} x
 * @return {boolean}
 */
// 双指针法
var isPalindrome = function(x) {
    // 先把数字转为字符串，便于遍历
    let numStr = x.toString()
    // 首位指针设置
    let start = 0, end = numStr.length - 1
    while(start < end) {
        // 一检测到首位不相同就返回false
        if (numStr[start] !== numStr[end]) return false
        // 否则双指针向中间靠拢
        start++
        end--
    }
    // 都相同那就返回true喽
    return true
};

console.log(isPalindrome(-101))