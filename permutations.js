/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
   let results=[];
   if(nums.length===1) {
       results.push([...nums]);
       return results;
   }
   else {
       for(let i=0;i<nums.length;i++) {
           let cur=[nums[i]];
           let rest=nums.slice(0,i).concat(nums.slice(i+1));
           let permutations=permute(rest);
           for(let j=0;j<permutations.length;j++) {
               results.push(cur.concat(permutations[j]));
           }
       }
   }
  return results;
};