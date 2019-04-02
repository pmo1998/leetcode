/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = n => {
    
    let fullLen=2*n, result=[];
    
    const generator = (cur, open, close) => {
        if(cur.length==fullLen) {
            result.push(cur);
            return;
        }
        if(open < n) generator(cur+"(", open+1, close);
        if(close < open) generator(cur + ")", open, close+1);
    };
    
    generator("",0,0);
    return result;
};