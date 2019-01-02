/*
    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
                 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/

var lengthOfLongestSubstring = function(str) {
  let map={},i=0,ans=0;
    [].map.call(str,(ch,index)=>{
        if(map[ch]) i=Math.max(map[ch],i);
        ans = Math.max(ans, index - i + 1);
        map[ch]= index + 1;

    });
    return ans;
}
