/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 判断其中一条链表是否为空，空则返回另外一条
    if (l1 === null) return l2 
    if (l2 === null) return l1
    // 创建一条新链表用来合并两条链表
    let l3 = new ListNode(0)
    // 用于l3的前进，但又不改变l3
    let dommy = l3
    // 其中有一个为null则退出循环
    while(l1 && l2) {
        // 判断两个节点的val谁小，谁小指向谁，并且小值链表要前进一步
        if (l1.val <= l2.val) {
            dommy.next = l1
            l1 = l1.next
        } else {
            dommy.next = l2
            l2 = l2.next
        }
        dommy = dommy.next
    }
    // 经过上步循环，必有一条链表为null，以下是判断谁为null，并指向另外一条链表
    if (l1 === null) {
        dommy.next = l2
    }
    if (l2 === null) {
        dommy.next = l1
    }
    // 返回结果l3的next，因为l3的第一个节点是0，无意义
    return l3.next
};