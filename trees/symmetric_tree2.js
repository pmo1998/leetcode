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

var isSymmetric = function(root) {
    if(!root || !root.left&&!root.right) return true;
    let queue=[root.left,root.right];
    while(queue.length){
      let left_ptr=queue[0];
      queue.shift();
      let right_ptr=queue[0];
      queue.shift();
      if(left_ptr&&right_ptr&&left_ptr.val!=right_ptr.val) return false;
      if(left_ptr&&right_ptr&&left_ptr.left&&right_ptr.right) {
        queue.push(left_ptr.left);
        queue.push(right_ptr.right);
      }
      else if(!left_ptr||!right_ptr||left_ptr.left||right_ptr.right) return false;
      if(left_ptr&&right_ptr&&left_ptr.right&&right_ptr.left) {
        queue.push(left_ptr.right);
        queue.push(right_ptr.left);
      }
      else if(!left_ptr||!right_ptr|| left_ptr.right||right_ptr.left) return false;
    }
    return true;
};
