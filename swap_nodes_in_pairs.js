/*function ListNode(val) {
      this.val = val;
      this.next = null;
  }

  Given a linked list, swap every two adjacent nodes and return its head.
  Example:
  Given 1->2->3->4, you should return the list as 2->1->4->3

*/
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let ptr=head;
    while(ptr.next) {
        let cur_val=ptr.val;
        let next_val=ptr.next.val;
        ptr.val=next_val;
        ptr.next.val=cur_val;
        if(ptr.next.next) ptr=ptr.next.next;
        else ptr=ptr.next;
    }
   return head;
};
