/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p)  => {
    let result=[], map={};
    for(let i=0;i<p.length;i++) {
        if(map[p[i]]) map[p[i]]+=1;
        else map[p[i]]=1;
    }
    let l=0, r=-1;
    let count=Object.keys(map).length;
    while (r < s.length) {
        if (count === 0) {
            if (r - l + 1 === p.length) {
                result.push(l);
            }
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
};

