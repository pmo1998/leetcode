/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
You may not modify the values in the list's nodes, only nodes itself may be changed.
Example 1:
Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

  var reorderList = function(head) {
    let nodes = [], node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    let len = nodes.length,middle = Math.floor(len/2);
    node = head;
    for (let i = 0; i < middle; i++) {
        let last = nodes[len - i - 1];
        nodes[len - i - 2].next = null;
        let next = node.next;
        nextFromEnd.next = next;
        node.next = nextFromEnd;
        node = next;
    }
  };
