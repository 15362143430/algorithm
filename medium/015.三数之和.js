// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let arr = [], len = nums.length - 1
    for (let i = 0; i < len - 1; i++) {
        let num1 = nums[i]
        if (num1 > 0) break; // 如果已经爆0，不用做了，break
        if (num1 === nums[i - 1]) continue
        let start = i + 1, end = len
        while (start < end) {
            let num2 = nums[start], num3 = nums[end]
            let sum = num1 + num2 + num3
            if (sum === 0) {
                arr.push([num1, num2, num3])
                // 最关键一步，去重
                while (start < end && nums[start] === num2) start++
                while (start < end && nums[end] === num3) end--
            } else if (sum > 0) {
                end--
            } else {
                start++
            }
        }
    }
    return arr
};

// threeSum = (nums) => {
//     nums.sort((a, b) => a - b); // 排序
//     const res = [];
//     for (let i = 0; i < nums.length - 2; i++) { // 外层遍历
//         let n1 = nums[i];
//         if (n1 > 0) break; // 如果已经爆0，不用做了，break
//         if (i - 1 >= 0 && n1 == nums[i - 1]) continue; // 遍历到重复的数，跳过    

//         let left = i + 1;            // 左指针
//         let right = nums.length - 1; // 右指针

//         while (left < right) {
//             let n2 = nums[left], n3 = nums[right];

//             if (n1 + n2 + n3 === 0) {  // 三数和=0，加入解集res
//                 res.push([n1, n2, n3]);
//                 while (left < right && nums[left] == n2) left++; // 直到指向不一样的数
//                 while (left < right && nums[right] == n3) right--; // 直到指向不一样的数
//             } else if (n1 + n2 + n3 < 0) { // 三数和小于0，则左指针右移
//                 left++;
//             } else {      // 三数和大于0，则右指针左移
//                 right--;
//             }
//         }
//     }
//     return res;
// };

console.log(threeSum([-1,0,1,2,-1,-4]))

function foo () {}
foo = 1
foo = 2
foo = 3
foo = 4
foo = 5
function foo () {}
foo = 10
foo = 11
foo = 12
foo = 13
foo = 15
console.log(foo)