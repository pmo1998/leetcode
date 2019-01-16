/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var getNodes=function(root) {
    let nodes=[];
    const traversal=root=>{
        if(!root) return;
        traversal(root.left);
        nodes.push(root.val);
        traversal(root.right);
    }
    traversal(root);
    return nodes;
}

var increasingBST = function(root) {
    if(!root) return null;
    let nodes=getNodes(root),newTree=new TreeNode(nodes[0]),cur=newTree;
    nodes.shift();
    nodes.map((val,index)=>{
        cur.right=new TreeNode(val);
        cur=cur.right;
    });
    return newTree;
};
