/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---


*/
var rightSideView = function(root) {
    if(!root) return [];
    let numbers=[],max_level=0;
    let fill_numbers=function(root,level) {
        if(!root) return;
        if(max_level< level) {
          numbers.push(root.val);
          max_level=level;
        }
        fill_numbers(root.right,level+1);
        fill_numbers(root.left,level+1);
    }
    fill_numbers(root,1);
    return numbers;

};
