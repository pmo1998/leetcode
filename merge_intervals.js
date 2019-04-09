/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
    if(!intervals.length) return [];
    intervals.sort((a,b)=>a.start-b.start);
    let result=[],cur=intervals[0];
    for(let i=1;i<intervals.length;i++) {
        let pair=intervals[i];
        if(pair.start<=cur.end) {
            cur.end=Math.max(cur.end, pair.end); 
        }
        else  {
            result.push(cur);
            cur=pair;
        }
    }
    result.push(cur);
    return result;
};