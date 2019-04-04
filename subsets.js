/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]


*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
    let result=[];
    const helper = (nums,start,subset) =>{
        result.push([...subset]);
        for(let i=start;i<nums.length;i++) {
            subset.add(nums[i]);
            helper(nums,i+1,subset);
            subset.delete(nums[i]);
        }
    };
    let subset=new Set();
    helper(nums,0, subset);
    return result;
    
};