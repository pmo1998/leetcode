/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

Return:

[
   [5,4,11,2],
   [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
;

const pathSum = (root, sum) => {
    let res=[];
    const getSum=(node,sum,arr)=>{
        if(!node) return;
        arr.push(node.val);
        if(!node.left&&!node.right) {
            if(sum-node.val===0) res.push(arr);
            return;
        }  
        getSum(node.left,sum-node.val,arr.slice());
        getSum(node.right,sum-node.val,arr.slice());
    };
    getSum(root,sum,[]);
    return res;
};