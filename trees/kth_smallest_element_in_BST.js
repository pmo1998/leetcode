/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
    let cur=root;
    let stack=[];
    while(cur){
        stack.push(cur);
        cur=cur.left
    }
    while(cur=stack.pop()) {
        if(!--k) return cur.val;
        if(cur.right) {
            cur=cur.right;
            while(cur) {
                stack.push(cur);
                cur=cur.left;
            }
        }
    }
};
