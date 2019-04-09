/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.
lo
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
    if(!strs.length) return "";
    if(strs.length===1) return strs[0];
    let common="";
    for(let i=0;i<strs[0].length;i++) {
        if(strs[1][i]!=strs[0][i]) break;
        if(strs[1][i]===strs[0][i]) common+=strs[0][i];
    }
    for(let i=2;i<strs.length;i++) {
        let cur=strs[i], newCommon="";
        for (let j=0;j<common.length;j++) {
            if(common[j]===cur[j]) newCommon+=common[j];
        }
        common=newCommon;
    }
    return common;
};