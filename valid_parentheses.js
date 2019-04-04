/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true


*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = str => {
    if(str.length===1) return false;
    let map={')':'(',
             '}':'{',
             ']':'['};
    let stack=[], is_valid=true;
    for(let i=0;i<str.length;i++) {
        if(str[i]==='(' || str[i]==='[' || str[i]==='{') stack.push(str[i]);
        else if(stack[stack.length-1]===map[str[i]]) stack.pop();
        else {
            is_valid=false;
            break;
        }
    }
    return is_valid&&stack.length===0;
}
