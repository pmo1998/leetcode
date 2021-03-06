/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.


Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
 
const sortedSquares = A => {
    let result=[];
    let N=A.length, j=0;
    while(j<N && A[j]<0) j++;
    let i=j-1;
    while(i>=0 && j<N) {
        if(A[i]*A[i]<A[j]*A[j]) {
            result.push(A[i]*A[i]);
            i--;
        }
        else {
            result.push(A[j]*A[j]);
            j++;
        }
    }
    
    while (i >= 0) {
        result.push(A[i] * A[i]);
        i--;
    }
    while (j < N) {
        result.push(A[j] * A[j]);
        j++;
    }
    
    return result;
    
};