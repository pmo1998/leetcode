/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


*/
const insert=(root,node)=>{
  if(!root) return;
  if(!root.right) {
      root.right=node;
      return;
  }
  let queue=[root], result=null;
  while (queue.length) {
        let cur_node = queue.pop();
        queue.pop();
        if (cur_node.left) queue.push(cur_node.left);
        if (cur_node.right){
            queue.push(cur_node.right);
            if(!cur_node.right.right)  result=cur_node.right;
        }
    }
 if(result) result.right=node;
}

var flatten = function(root) {
  if(!root) return;
  let left=root.left;
  let right=root.right;
  insert(left,right);
  root.left=null;
  if(left) root.right=left;
  flatten(root.right);
};
