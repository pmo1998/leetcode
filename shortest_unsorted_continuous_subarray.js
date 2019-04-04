/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:

Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */


const  findUnsortedSubarray = nums =>  {
    let min=Number.POSITIVE_INFINITY,max=Number.NEGATIVE_INFINITY;
    let flag=false;
    for(let i=1;i<nums.length;i++) {
        if (nums[i] < nums[i - 1]) flag = true;
        if(flag) min=Math.min(min,nums[i]);   
    }
    console.log(min);
    flag=false;
    for(let i=nums.length-2;i>=0;i--) {
         if (nums[i] > nums[i + 1]) flag = true;
        if(flag) max= Math.max(max,nums[i]);
    }
    console.log(max);
    for ( var l = 0; l < nums.length; l++) if (min < nums[l]) break;
    for ( var r = nums.length - 1; r >= 0; r--) if (max > nums[r]) break;
    return (r - l < 0) ? 0 : (r - l + 1);
};