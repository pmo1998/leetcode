/*

 Two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order and each of their nodes contain a single digit.
 Task: add the two numbers and return it as a linked list.
 The two numbers do not contain any leading zero, except the number 0 itself.
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8
  Explanation: 342 + 465 = 807. 
*/

function ListNode(val) {
    this.val = val;
    this.next =null;
}

var addTwoNumbers = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    let l3=new ListNode(0),head=l3,reminder=0,sum=0;
    while(l1||l2) {
      let l1_val=l1?l1.val:0;
      let l2_val=l2?l2.val:0;
      sum=l1_val+l2_val+reminder;
      reminder= Math.floor(sum / 10);
      head.next = new ListNode(sum%10);
      head = head.next;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    if (reminder > 0) head.next = new ListNode(reminder);
    return l3.next;
};
