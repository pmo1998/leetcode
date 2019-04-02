/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:

Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False

Note:

    The input strings only contain lower case letters.
    The length of both given strings is in range [1, 10,000].

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (t, s) => {
    let map={};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    let l=0, r=-1;
    let count=Object.keys(map).length;
    while (r < s.length) {
        if (count === 0) {
            if (r - l + 1 === t.length) return true;
            if (map[s[l]] !== undefined) map[s[l]]++;
            if (map[s[l]] > 0) count++;
            l++;  
        } 
        else {
            r++;
            if (map[s[r]] !== undefined) map[s[r]]--;
            if (map[s[r]] === 0) count--;  
        }
    }
    return false;
};