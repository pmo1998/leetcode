
/*
Given a string, your task is to count how many palindromic substrings in this string.
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


*/

var countSubstrings = function(s) {
    if (!s.length) return 0;
    let start=0,max_length=1,counter=s.length;
    const expandAroundCenter=(low,high)=> {
        while(low>=0 && high<s.length && s[low]===s[high]) {
            --low;
            ++high;
            counter++;
        }
    }
    [].map.call(s,(value,index)=>{
        expandAroundCenter(index-1,index);
        expandAroundCenter(index-1,index+1);
    });
    return counter;
};
