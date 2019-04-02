
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

/**********************************************/
var longestPalindrome = function(s) {
    let map={};
    for(let i=0;i<s.length;i++) {
        if(map[s[i]]) map[s[i]]+=1;
        else map[s[i]]=1;
    }
    let count=0, hasOdd=false;
    for(let key in map) {
        if(map[key]%2===0) count+=map[key];
        else count+=map[key]-1;
        if(map[key]%2!==0) hasOdd=true;
    }
    return hasOdd?count+1:count;
};