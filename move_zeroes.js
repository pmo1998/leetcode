/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    if(!nums.length || nums.length===1) return nums;
    let initial_index=null,counter=0, is_init=false;
    for(let i=0;i<nums.length;i++) {
        if(!is_init && nums[i]===0) {
            initial_index=i;
            is_init=true;
        }
      if(nums[i]==0 && i!==initial_index) counter++;
      if(nums[i]!=0 && is_init) {
           let cur=nums[i];
           nums[i]=0;
           nums[initial_index]=cur;
           initial_index=counter>0?(initial_index+1):i;
       }        
    }
};m