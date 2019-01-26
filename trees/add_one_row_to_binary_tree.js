/*
  Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d.
  The root node is at depth 1.
  The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes with value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root. If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the original tree is the new root's left subtree.

  Example 1:
  Input:
  A binary tree as following:
         4
       /   \
      2     6
     / \   /
    3   1 5

  v = 1
  d = 2

  Output:
         4
        / \
       1   1
      /     \
     2       6
    / \     /
   3   1   5
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var addOneRow = function(root, v, d) {
    if(d===1) {
      let new_root=new TreeNode(v);
      new_root.left=root;
      return new_root;
    }
    const addRow=(root,depth)=>{
        if(depth===(d-1)) {
          let new_left_node=new TreeNode(v), new_right_node=new TreeNode(v);
          new_left_node.left=root.left;
          new_right_node.right=root.right;
          root.left=new_left_node;
          root.right=new_right_node;
        }
        if(root.left) addRow(root.left,depth+1);
        if(root.right) addRow(root.right,depth+1);
    }
    addRow(root,1);
    return root;
};
