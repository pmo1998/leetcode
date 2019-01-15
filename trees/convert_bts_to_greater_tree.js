/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var convertBST = function(root) {
    let sum=0;
    var changeNodes=function(root) {
        if(!root) return;
        changeNodes(root.right);
        sum+=root.val;
        root.val=sum;
        changeNodes(root.left);
    }
    changeNodes(root);
    return root;
};
