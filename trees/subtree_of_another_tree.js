
/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants.
The tree s could also be considered as a subtree of itself.
Example 1:
Given tree s:

    3
   / \
  4   5
 / \
1   2

Given tree t:

  4
 / \
1   2

Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0

Given tree t:

   4
  / \
 1   2

Return false.
*/

var isEqual= function(s, t) {
    if(!s&&!t) return true;
    if(s&&t&&s.val===t.val) return isEqual(s.left,t.left)&&isEqual(s.right,t.right);
    return  false;
}

var isSubtree = function(s, t) {
    if(!s&&!t) return true;
    if(isEqual(s,t)) return true;
    else if (s) return isSubtree(s.left,t)||isSubtree(s.right,t);
    return false;
};
