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

/*
Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

*/

var reverseBetween = function(head, m, n) {
    if(!head) return head;
    let cur=head,prev=null;
    while (m > 1) {
         prev = cur;
         cur = cur.next;
         m--;
         n--;
  }
  let cur_ptr=cur,prev_ptr=prev;
  while(n>0) {
      let next=cur.next;
      cur.next=prev;
      prev=cur;
      cur=next;
      n--;
  }
  if(prev_ptr) prev_ptr.next=prev;
  else head=prev;
  cur_ptr.next=cur;
  return head;
};
