/*
Given a binary tree, return the tilt of the whole tree.
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values.
Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.
Example:
Input:
         1
       /   \
      2     3
Output: 1
Explanation:
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
*/

var getSum=function(root) {
    if(!root) return 0;
    return root.val+getSum(root.left)+getSum(root.right);

}

var findTilt = function(root) {
    if(!root) return 0;
    let left_sum=getSum(root.left);
    let right_sum=getSum(root.right);
    return Math.abs(left_sum-right_sum)+findTilt(root.left)+findTilt(root.right);

};
