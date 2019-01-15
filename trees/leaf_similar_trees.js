/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var getLeaves=function(root) {
 let leaves=[];
 var setLeaves=function(root){
     if(!root) return;
     if(!root.left&&!root.right) {
         leaves.push(root.val);
         return;
     }
     setLeaves(root.left);
     setLeaves(root.right);
 };
 setLeaves(root);
 return leaves;
}

var isEqualLeaves=function(leaves1,leaves2) {
   if(leaves1.length!=leaves2.length) return false;
   let is_equal=true;
   leaves1.map((val,index)=> {if(val!=leaves2[index]) is_equal=false})
   return is_equal;
}

var leafSimilar = function(root1, root2) {
   if(!root1&&!root2) return true;
   let root1Leaves=getLeaves(root1), root2Leaves=getLeaves(root2);
   return isEqualLeaves(root1Leaves,root2Leaves);
};
