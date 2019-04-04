/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

*/

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
    let map={};
    for(let i=0;i<s.length;i++) {
        if(map[s[i]]) map[s[i]].counter++;
        else map[s[i]]={index:i,counter:1};
    }
    for(let key in map) {
        if(map[key].counter===1) return map[key].index;
    }
    return -1;
};