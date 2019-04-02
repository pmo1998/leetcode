/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]

Note:

    S will be a string with length between 1 and 12.
    S will consist only of letters or digits.

*/

/**
 * @param {string} S
 * @return {string[]}
 */

const letterCasePermutation =s=>{
    const helper=(prev,str,result)=>{
        if(str.length===0) result.add(prev);
        else {
            const ch = str.charAt(0);
            helper(prev+ch.toLowerCase(), str.substr(1), result);
            helper(prev+ch.toUpperCase(), str.substr(1), result);
        }
    };
    let result=new Set(), prev='';
    helper(prev,s,result);
    return [...result];
};



