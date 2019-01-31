/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*

Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5


 */

const listToArray=head=>{
    let values=[];
    while(head){
      values.push(head.val);
      head=head.next;
    }
    return values;
}

var sortedListToBST = function(head) {
    let values=listToArray(head);
    const listToTree=(l,r)=>{
        if(l<=r) {
            let middle=Math.floor((l+r)/2);
            let root=new TreeNode(values[middle]);
            root.left=listToTree(l,middle-1);
            root.right=listToTree(middle+1,r);
            return root;
        }
        else return null;
    }
    return listToTree(0,values.length-1);
};
