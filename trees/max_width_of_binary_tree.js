/*
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels.
The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

Example 1:

Input: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 
Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

Example 2:

Input: 

          1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).


*/

var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let map={},max=0;
    const dfs=(root,depth,pos)=>{
        if(!root) return;
        if(!map[depth]) map[depth]=pos;
        max=Math.max(max,pos-map[depth]+1);
       /* if(isNaN(max)) {
            max=1;
            return;
        }*/
        dfs(root.left,depth+1,pos*2);
        dfs(root.right,depth+1,pos*2+1);
    }
    dfs(root,0,1);
    return max;
};










