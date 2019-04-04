/*
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = A => {
    let map={}, word=A[0];
    for(let i=0;i<word.length;i++) {
        if(map[word[i]]) map[word[i]]=map[word[i]]+1;
        else map[word[i]]=1;
    }

    for(let i=1;i<A.length;i++) {
        let newMap={}, word=A[i];
         for(let i=0;i<word.length;i++) {
             if(map[word[i]]) {
                 if(newMap[word[i]]) newMap[word[i]]=newMap[word[i]]+1;
                 else newMap[word[i]]=1;
             }
        }
        
        for(let key in newMap) {
            if(map[key]) {
                newMap[key]=(newMap[key]<map[key])?newMap[key]:map[key];
            }
        }
        map=newMap;
    }
    let result=[];
    for(let key in map) {
        for(let i=1;i<=map[key];i++) {
            result.push(key);
        }
    }
    return result;
};














