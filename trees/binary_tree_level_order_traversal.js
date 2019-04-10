/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]

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
 * @return {number[][]}
 */
const levelOrder = root => {
    let result=[];
    const helper=(node,level)=>{
        if(!node) return;
        if(!result[level]) result[level]=[node.val];
        else result[level].push(node.val);
        helper(node.left, level+1);
        helper(node.right, level+1);
    };
    
    helper(root,0);
    return result;
};