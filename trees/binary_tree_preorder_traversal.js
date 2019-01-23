/*Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*var preorderTraversal = function(root) { //Recursive 
    let values=[];
    const traverse=(root)=>{
        if(!root) return;
        values.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return values;
};*/

var preorderTraversal = function(root) {
   if(!root) return [];
   let queue=[root],result=[];
   while(queue.length){
      let first=queue.shift();
      result.push(first.val);
      if(first.left) queue.push(first.left);
      if(first.right) queue.push(first.right);
   }
   return result;
    
};
