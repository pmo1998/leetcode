/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isMirror=function(left,right) {
  if(!left&&!right) return true;
  if(left&&right&&left.val==right.val){
     return isMirror(left.left,right.right)&&isMirror(left.right,right.left);
  }
  else return false;
}

var isSymmetric = function(root) {
    if(!root) return true;
    return isMirror(root.left,root.right);
};
