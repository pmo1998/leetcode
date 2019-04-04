/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false

Example 2:

Input: 1->2->2->1
Output: true
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const listToArray=lst=>{
    let result=[];
    while(lst) {
        result.push(lst.val);
        lst=lst.next;
    }
    return result;
}

const isPalindrome = head => {
    let arr=listToArray(head);
    let len=arr.length, middle=Math.floor((len-1)/2), isEven=(len%2)===0;
    let leftIndex=isEven?middle:(middle-1), rightIndex=isEven?(leftIndex+1):(middle+1);
    let isPalindrom=true;
    while(leftIndex>=0 && rightIndex<len) {
        if(arr[leftIndex]!==arr[rightIndex]) {
            isPalindrom=false;
            break;
        }   
        leftIndex--;
        rightIndex++;
    }
    return isPalindrom;
};