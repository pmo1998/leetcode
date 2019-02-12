
/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

const getPivotIndex=(nums,low,high)=>{
    if(low===high) return low;
    if(high < low) return -1;
    let mid=Math.floor((low+high)/2);
    if (mid < high && nums[mid] > nums[mid + 1]) return mid;
    else if(mid>low && nums[mid] < nums[mid-1]) return mid-1;
    else if(nums[low]>=nums[mid]) return getPivotIndex(nums,low,mid-1);
    else return getPivotIndex(nums,mid+1,high);
}

const binarySearch=(nums,low,high,target)=>{
    if (high < low) return -1;
    let mid = Math.floor((low + high)/2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) return binarySearch(nums,(mid + 1), high,target);
    else return binarySearch(nums,low, (mid -1),target);
 }

var search = function(nums, target) {
    let n=nums.length-1;
    let pivot=getPivotIndex(nums,0,n);
    if (pivot === -1) return binarySearch(nums,0,n,target);
    else if (nums[pivot] === target)  return pivot;
	else if (nums[0] <= target) return binarySearch(nums,0, pivot-1,target);
   	else return binarySearch(nums,pivot+1, n,target);
};
