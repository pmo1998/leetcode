/*

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isSelfDivided=number=>{
    let result=true, n=number;
    while(n>0){
        let digit=n%10;
        if(number%digit!==0) {
            result=false;
            return result;
        }
        n=Math.floor(n/10);
   }
    return result;
};

const selfDividingNumbers = left, right => {
    let result=[];
    for(let i=left;i<=right;i++) {
        if(isSelfDivided(i)) result.push(i);
    }
    return result;
};