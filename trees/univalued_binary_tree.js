
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

  A binary tree is univalued if every node in the tree has the same value.
  Return true if and only if the given tree is univalued.
  Example:
  [1,1,1,1,1,null,1] --> true
   [2,2,2,5,2] --> false

 */
var isUnivalTree = function(root) {
    if(!root) return true;
    if(root&&root.left&&root.val!=root.left.val) return false;
    if(root&&root.right&&root.val!=root.right.val) return false;
    return isUnivalTree(root.left)&&isUnivalTree(root.right);
};
