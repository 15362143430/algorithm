// 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

// 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。

// 示例 1:

// 输入:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// 输出: ["Shogun"]
// 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
// 示例 2:

// 输入:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// 输出: ["Shogun"]
// 解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = [], sum = Infinity
    for (let i = 0; i < list1.length; i++) {
        let str = list1[i], index = list2.indexOf(str)
        if (index !== -1) {
            if (index + i < sum) {
                sum = index + i
                res = []
                res.push(str)
            }
            //  else if (index + i === sum) {
            //     res.push(str)
            // }
        }
    }
    return res
};
console.log(findRestaurant(["Shogun",'ss', "Tapioca Express", "Burger King", "KFC"], ["KFC", "Burger King", "Shogun"]))