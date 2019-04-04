/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums =>{
    let result=[];
    const helper = (nums,start,subset) =>{
        result.push([...subset]);
        for(let i=start;i<nums.length;i++) {
            if( i > start && nums[i] === nums[i-1]) continue; 
            subset.push(nums[i]);
            helper(nums,i+1,subset);
            subset.pop();
        }
    };
    let subset= [];
    helper(nums.sort(),0, subset);
    return result;
};