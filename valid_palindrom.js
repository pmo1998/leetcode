/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase().replace(/[\W_]+/g, '');
    let middle=Math.floor((s.length-1)/2);
    let isEven=s.length%2===0;
    let l=isEven?middle:middle-1;
    let r=middle+1;
    while(l>=0 && r<s.length) {
        if(s[l]!=s[r]) return false;
        l--;
        r++;
    }
    return true;
};