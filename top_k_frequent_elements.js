/*
 Top K Frequent Elements
 
 Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k)=> {
    let map={};
    nums.forEach((value)=>{
        map[value]=(map[value] || 0) + 1;
    });
    let values=Object.entries(map).sort((a,b)=>b[1]-a[1]);
    
    let result=[];
    for(let i=0;i<k;i++) {
        result.push(parseInt(values[i][0]));
    }
    return result;
};