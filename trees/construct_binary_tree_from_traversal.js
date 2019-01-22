/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Given inorder and postorder traversal of a tree, construct the binary tree.
Note:
You may assume that duplicates do not exist in the tree.
For example, given
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
var buildTree = function(inorder, postorder) {
    if(inorder.length===0) return null;
    let value=postorder.pop();
    let tree=new TreeNode(value);
    let slice_point=inorder.indexOf(value);
    let left_inorder=inorder.slice(0,slice_point);
    let right_inorder=inorder.slice(slice_point+1);
    if(left_inorder.length===1) tree.left=new TreeNode(left_inorder[0]);
    else if (left_inorder.length>1){
      let left_postorder=postorder.slice(0,left_inorder.length);
      tree.left=buildTree(left_inorder,left_postorder)
    }
    if(right_inorder.length===1) tree.right=new TreeNode(right_inorder[0]);
    else if (right_inorder.length>1){
      let right_postorder=postorder.slice(left_inorder.length,left_inorder.length+right_inorder.length);
      tree.right=buildTree(right_inorder,right_postorder);
    }
    return tree;
};
