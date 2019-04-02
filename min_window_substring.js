/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:

    If there is no such window in S that covers all characters in T, return the empty string "".
    If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/

const minWindow = (s, t) => {
    if(t.length>s.length) return "";
    if(t===s) return t;
    let result="", map={};
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1);
    let l=0, r=-1;
    let count=Object.keys(map).length;
     while (r < s.length) {
        if (count === 0) {
            if (!result || r - l + 1 < result.length) result = s.slice(l, r + 1);
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
    return result;
}