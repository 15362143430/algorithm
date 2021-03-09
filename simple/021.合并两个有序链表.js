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
    if (l1 === null) return l2
    if (l2 === null) return l1
    let l3 = new ListNode(0)
    let dommy = l3
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            dommy.next = l1
            l1 = l1.next
        } else {
            dommy.next = l2
            l2 = l2.next
        }
        dommy = dommy.next
    }
    if (l1 === null) {
        dommy.next = l2
    }
    if (l2 === null) {
        dommy.next = l1
    }
    return l3.next
};