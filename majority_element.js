/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
    let map={};
     for(let i=0;i<nums.length;i++) {
        if(!map[nums[i]]) map[nums[i]]=1;
        else map[nums[i]]=map[nums[i]]+1;
    } 
    let major={key:null,value:Number.NEGATIVE_INFINITY};
    for(let key in map) {
        if(map[key]>major.value) {
            major.key=key;
            major.value=map[key];
        }
    }
    return major.key;
};