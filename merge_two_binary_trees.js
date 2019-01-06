/*function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

If two nodes overlap, then sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node of new tree.

Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7

*/

var mergeTrees = function(t1, t2) {
    if(!t1&&!t2) return null;
    else if(!t1&&t2) return t2;
    else if(t1&&!t2) return t1;

    let new_tree=new TreeNode(t1.val+t2.val);
    new_tree.left=mergeTrees(t1.left,t2.left);
    new_tree.right=mergeTrees(t1.right,t2.right);
    return new_tree;

};
