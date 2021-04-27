// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 如果s长度是奇数，不可能闭合，直接返回false
    if (s.length % 2 !== 0) return false
    // 设置一个map存储，左括号为key，右括号为value
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    const map = new Map()
    // 设置一个数组，用来遍历压栈
    const res = []
    for (let i = 0; i <= s.length; i++) {
        let item = s[i]
        if (map.has(s[i])) {
            // 左括号情况，直接push进数组
            res.push(item)
        } else {
            // 右括号情况，且右括号与前面的元素不相同直接返回false
            if (map.get(res.pop()) !== item) {
                return false
            }
        }
    }
    return true
};

console.log(isValid('([)]'))