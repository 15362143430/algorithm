## 001.两数之和
### 题目

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30b713436db540719fc7eef9163f9095~tplv-k3u1fbpfcp-watermark.image)
### 思路

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5da47befafd4648bd6501fe31dc6948~tplv-k3u1fbpfcp-watermark.image)
> 思路：先设一个map用来存储，然后开始遍历数组nums，把元素当做key，索引index当做value,存进map里。当遍历到map里存在（target - 元素）这个key的这种情况时，把这个key所对应的value以及当前元素对应的索引值一起return
### 代码
```JavaScript
var twoSum = function(nums, target) {
    // 设置一个map用来存储
    const map = new Map()
    for(let i = 0; i < nums.length ; i++) {
        // 计算target与当前元素的差值
        const chazhi = target - nums[i]
        if (map.has(chazhi)) {
            // 如果map里存在差值为key的情况，直接返回
            return [map.get(chazhi), i]
        } else {
            // 如果不存在则继续存储进map里
            map.set(nums[i], i)
        }
    }
};
```

## 007.整数反转
### 题目


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2c26d4d58654870b1c9ca4d7485be7c~tplv-k3u1fbpfcp-watermark.image)
### 思路
> 思路：先把正负抽离出来，把该数字取绝对值，然后去进行不断地对10取余并拼在前方，最后再把正负归入返回值的判断中（注意区间）
### 代码
```JavaScript
var reverse = function(x) {
    // 判断该数字正数或者是负数
    const flag = x < 0 ? -1 : 1
    // old：对该数字取绝对值，方便后面以正数来计算
    let old = Math.abs(x)
    // new：用来存储新数字
    let now = 0
    while (old > 0) {
        // old每次都对10取余，并且now乘10与之相加
        now = now * 10 + old % 10
        // 然后old除以10并取floor，准备下一次运算
        old = Math.floor(old / 10)
    }
    // 正负运算
    now = flag * now
    // 判断是否超出区间
    return now < Math.pow(-2, 31) || now > Math.pow(2, 31) - 1 ? 0 : now
};
```
## 009.回文数
### 题目



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67efa6d7a4204090ad8d3e65d19a31cc~tplv-k3u1fbpfcp-watermark.image)
### 思路


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9999afe38d7e4bbc837a93a370558c61~tplv-k3u1fbpfcp-watermark.image)
> 思路：双指针法，设置start与end指针，向中间靠拢，对应的元素不等就返回false，全都相等就返回true
### 代码
```JavaScript
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
```
## 014.最大公共前缀
### 题目


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/16f6ae7a09bd4a6cae95c96e2c3607d5~tplv-k3u1fbpfcp-watermark.image)
### 思路


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f86e6c71d20745e0b4d21718805c4ae8~tplv-k3u1fbpfcp-watermark.image)
> 思路：
### 代码
```JavaScript
var longestCommonPrefix = function (strs) {
    // 如果strs长度为0则直接返回空字符串
    if (!strs.length) return ''
    // longPrefix：用来存储最长前缀
    let longPrefix = ''
    let i = 0
    // 以第一个单词为基准进行遍历
    while (strs[0][i]) {
        // 单词的每一个字母
        let first = strs[0][i]
        if (strs.some(item => item[i] !== first)) {
            // 遍历strs，只要有一个单词的第i个字母跟第一个单词的第i哥字母不一样就返回当前longPrefix
            return longPrefix
        } else {
            // 否则，longPrefix继续拼接
            longPrefix += first
        }
        i++
    }
    return longPrefix
};
```
## 020.有效的括号
### 题目


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a001002be45743b88e5a3a9335f1c8be~tplv-k3u1fbpfcp-watermark.image)
### 思路


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e35fb868a6ee42ef915dad57bf95cb8c~tplv-k3u1fbpfcp-watermark.image)
> 思路：map存储左括号为key，右括号为value，遍历字符串，左括号情况则把左括号对应的value压进数组，右括号情况则判断弹出数组的前元素是否跟自身一样，不一样的话直接返回false
### 代码
```JavaScript
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
```