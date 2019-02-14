/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]



*/


const getFirstOccurence=(nums,low,high,target) => {
    if(high<low) return -1;
    let mid=Math.floor((low+high)/2);
    if(nums[mid]===target&&(mid===0 || target>nums[mid-1])) return mid;
    else if(target > nums[mid]) return getFirstOccurence(nums, (mid + 1), high, target);
    else return getFirstOccurence(nums, low, (mid -1), target);
}

const getLastOccurence=(nums,low,high,target) => {
    if(high<low) return -1;
    let mid=Math.floor((low+high)/2);
    if(nums[mid]===target&&(mid===nums.length-1 || target<nums[mid+1])) return mid;
    else if(target < nums[mid])  return getLastOccurence(nums, low, (mid -1), target);
    else return getLastOccurence(nums, (mid + 1), high, target);
}

var searchRange = function(nums, target) {
   let first=getFirstOccurence(nums,0,nums.length-1,target);
   let last=getLastOccurence(nums,0,nums.length-1,target);
   return [first,last];
};
