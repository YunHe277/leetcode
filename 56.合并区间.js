/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let arr = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let flag1 = arr[arr.length - 1][1] <= intervals[i][1] && arr[arr.length - 1][1] >= intervals[i][0]
        let flag2 = intervals[i][1] <= arr[arr.length - 1][1] && intervals[i][1] >= arr[arr.length - 1][0]
        if (arr.length && (flag1 || flag2)) {
            let tmp = arr.pop()
            arr.push([Math.min(tmp[0], intervals[i][0]), Math.max(tmp[1], intervals[i][1])])
        } else {
            arr.push(intervals[i])
        }
    }
    return arr
};
// @lc code=end

