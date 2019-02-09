/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.
Note:
The solution set must not contain duplicate triplets.
Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
var threeSum = function(nums) {
    if (nums.length < 3 || nums === null) return [];
    let unique_triples = [];
    nums = nums.sort((a,b) => a-b);
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let target = 0 - nums[i], l = i+1, r = nums.length - 1;
        while (l < r) {
            let cur_sum=nums[l] + nums[r];
            if (cur_sum === target) {
                unique_triples.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l+1]) l++;
                while (l < r && nums[r] === nums[r-1]) r--;
                l++;
                r--;
            }
            else if (cur_sum < target)l++;
            else r--;
        }
    }
    return unique_triples;
};
