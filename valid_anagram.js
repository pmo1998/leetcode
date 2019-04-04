/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const  isAnagram = (s, t) =>v {
    if(s.length!=t.length) return false;
    let map={};
    for(let i = 0; i < s.length; i ++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }
        else map[s[i]] ++;
    }
    
    for(let i=0;i<t.length;i++) {
        if(map[t[i]]) map[t[i]]--;
    }
    
    for(let key in map) if(map[key]>0) return false;
    return true;
};