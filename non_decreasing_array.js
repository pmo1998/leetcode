/*
 Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example 1:

Input: [4,2,3]
Output: True
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

Example 2:

Input: [4,2,1]
Output: False
Explanation: You can't get a non-decreasing array by modify at most one element.

*/


const checkPossibility = nums => {
    let length=nums.length;
    let  counter=0;
    if(nums[0]>nums[1]) {
        nums[0]=nums[1];
        counter++;
    } 
    for(let i=0;i<length-1;i++) {
        if(nums[i]>nums[i+1]) {
            if(nums[i-1]<=nums[i+1])  nums[i]=nums[i-1];
            else nums[i+1]=nums[i];
            counter++;
        }
    }
    return counter<=1;
};