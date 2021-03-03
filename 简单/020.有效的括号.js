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
    if (s.length % 2 !== 0) return false
    const map = new Map()
    const res = []
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    for (let i = 0; i <= s.length; i++) {
        let item = s[i]
        if (map.has(s[i])) {
            res.push(item)
        } else {
            if (map.get(res.pop()) !== item) {
                return false
            }
        }
    }
    return true
};

console.log(isValid('([)]'))