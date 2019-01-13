/*function ListNode(val) {
      this.val = val;
      this.next = null;
  }

  Given a linked list, swap every two adjacent nodes and return its head.
  Example:
  Given 1->2->3->4, you should return the list as 2->1->4->3

*/

  var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let prev=null,ptr1=head,ptr2=ptr1.next;
    while (ptr2) {
      if (!prev) head = ptr2;
      else prev.next = ptr2;
      ptr1.next = ptr2.next;
      ptr2.next = ptr1;
      prev = ptr1;
      ptr1 = ptr1.next;
      ptr2 = ptr1&&ptr1.next?ptr1.next:null;
    }
    return head;
  }
