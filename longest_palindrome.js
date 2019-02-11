
/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.
Example 1:
  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
Example 2:
  Input: "cbbd"
  Output: "bb"
*/

var longestPalindrome = function(s) {
    if (s.length<=1) return s;
    let start=0,max_length=1;
    const expandAroundCenter=(low,high)=> {
        while(low>=0 && high<s.length && s[low]===s[high]) {
              if (high - low + 1 > max_length) {
                start = low;
                max_length = high - low + 1;
            }
            --low;
            ++high;
        }
    }
    [].map.call(s,(value,index)=>{
        expandAroundCenter(index-1,index);
        expandAroundCenter(index-1,index+1);
    });
    return s.slice(start,start+max_length);
};
