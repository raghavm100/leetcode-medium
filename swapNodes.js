// ==== Practice Problem: https://leetcode.com/problems/swap-nodes-in-pairs/ ====

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
    if(!head) return head
    if(head.next === null) return head
    
    let newHead = new ListNode(0, head)
    let node = newHead
    
    let elem1, elem2
    
    while(node.next !== null && node.next.next !== null){
        elem1 = node.next
        elem2 = elem1.next
        
        elem1.next = elem2.next
        elem2.next = elem1
        node.next = elem2
        
        node = elem1
    }
    
    return newHead.next
};