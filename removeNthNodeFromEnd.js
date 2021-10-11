// ==== Problem Statement: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ ====

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    if(head.next === null){
        head = head.next
        return head
    }
    
    let delNode = new ListNode(0, head)
    let node = head
    let i = 0
    
    while(node){
        node = node.next
        i++
        
        if(i>n){
            delNode = delNode.next
        }
    }
    
    if(i === n){
        head = head.next
    }else{
        delNode.next = delNode.next.next
    }
    
    return head
    
};

/*
    ====
    Sol: Simple looping through the list and starting to track the delete node's previous.
    
    TC: O(n)
    SC: O(1)
    ====
*/