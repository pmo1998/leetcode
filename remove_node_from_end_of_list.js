/*
Given a linked list, remove the n-th node from the end of list and return its head.
Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */

const getLength=(head)=>{
    let ptr=head, len=0;
    while(ptr){
        len++;
        ptr=ptr.next;
    }
    return len;
}

var removeNthFromEnd = function(head, n) {
   if(!head) return head;
   let len=getLength(head);
   if(len===1&&n===1) return null;
   if(len===n) return head.next;
   let ptr=head,index=0;
   while(ptr) {
       if(index===(len-n-1)&&ptr.next){
            ptr.next=ptr.next.next;
            break;
       }
       index++;
       ptr=ptr.next;
   }
  return head;
};
