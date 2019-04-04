/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]


*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) =>{
    let result=[];
    candidates=candidates.sort();
    let helper=(t, start, temp) => {
        if(t<0) return;
        if(t===0) {
            result.push([...temp]);
            return;
        }
        for(let i=start;i<candidates.length;i++) {
            if(i>start && candidates[i]===candidates[i-1]) continue;
            temp.push(candidates[i]);
            helper(t-candidates[i],i+1,[...temp]);
            temp.pop();
        }
    };
    let tmp=[];
    helper(target,0, tmp);
    return result;  
};