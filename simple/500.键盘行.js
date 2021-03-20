// 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

// 美式键盘 中：

// 第一行由字符 "qwertyuiop" 组成。
// 第二行由字符 "asdfghjkl" 组成。
// 第三行由字符 "zxcvbnm" 组成。


//  

// 示例 1：

// 输入：words = ["Hello","Alaska","Dad","Peace"]
// 输出：["Alaska","Dad"]
// 示例 2：

// 输入：words = ["omk"]
// 输出：[]
// 示例 3：

// 输入：words = ["adsdf","sfd"]
// 输出：["adsdf","sfd"]
//  

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const str1 = 'QWERTYUIOPqwertyuiop', str2 = 'ASDFGHJKLasdfghjkl', str3 = 'ZXCVBNMzxcvbnm'
    return words.filter(item => {
        item = item.split('')
        return item.every(item2 => (str1.includes(item2))) || item.every(item2 => (str2.includes(item2))) || item.every(item2 => (str3.includes(item2)))
    })
};
console.log(findWords(["adsdf","sfd"]))