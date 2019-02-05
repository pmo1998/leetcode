/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/
var reverseList = function(head) {
   if(!head) return head;
   let prev=null, cur=head;
   while(cur&&cur.next) {
        let next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
   }
   cur.next=prev;
   head=cur;
   return head;
};
