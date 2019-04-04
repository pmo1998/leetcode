/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3

Example 2:

Input: a = -2, b = 3
Output: 1


*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    let sum=0, carry=0;
    while(true) {
        sum=a^b;
        carry=(a&b)<<1;
        if(b===0) return a;
        a=sum;
        b=carry;
    }
};