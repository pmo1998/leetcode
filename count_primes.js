/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


*/

/**
 * @param {number} n
 * @return {number}
 */


const countPrimes = n =>{
   let numbers=new Array(n);
    numbers.fill(true);
    for(let p=2;p*p<n;p++) {
        if(numbers[p]) {
            for(let i=p*p;i<n;i+=p){
                numbers[i]=false;
            }
        }
    }
    let counter=0;
    for (let p=2; p<n; p++) 
       if (numbers[p]) counter++;
    return counter;
    
};