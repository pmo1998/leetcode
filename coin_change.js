/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

*/


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) =>{
    if (amount < 1) return 0;
    let knownResults=new Array(amount);
    knownResults.fill(Infinity);
    
    const change=(amount)=>{
        if(amount<0) return -1;
        if(amount==0) return 0;
        if(knownResults[amount-1]!=Infinity) return knownResults[amount-1];
        let min=Number.POSITIVE_INFINITY;
        for(let i=0;i<coins.length;i++) {
            let result=change(amount-coins[i]);
            if(result>=0 && result < min) min=result+1;
        }
        knownResults[amount-1]=(min==Number.POSITIVE_INFINITY)?-1:min;
        return knownResults[amount-1];
    };
    
    coins=coins.sort((a,b)=>a-b);
    let result= change(amount);
    console.log(knownResults);
    return result;
};