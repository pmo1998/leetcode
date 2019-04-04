/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let set=new Set(nums);
    let sum1=nums.reduce((acc,curVal)=>acc+curVal);
    let sum2=0;
    for(let val of set) sum2+=val;
    return 2*sum2-sum1;
};