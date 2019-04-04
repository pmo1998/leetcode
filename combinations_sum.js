/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]


*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const  combinationSum = (candidates, target) => {
    let result=[];
    let helper=(t, start, temp) => {
        if(t<0) return;
        if(t===0) {
            result.push([...temp]);
            return;
        }
        for(let i=start;i<candidates.length;i++) {
            temp.push(candidates[i]);
            helper(t-candidates[i],i,[...temp]);
            temp.pop();
        }
    };
    let tmp=[];
    helper(target,0, tmp);
    return result;  
};