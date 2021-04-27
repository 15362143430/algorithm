// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false
// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let smap = map.get(s[i])
        map.set(s[i], smap ? smap + 1 : 1)
    }
    for (let i = 0; i < t.length; i++) {
        let tmap = map.get(t[i])
        if (tmap) {
            map.set(t[i], tmap - 1)
        } else {
            return false
        }
    }
    return true
};
console.log(isAnagram("aacc", "ccac"))