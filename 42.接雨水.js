/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 1) return 0

    let leftMaxArr = new Array(height.length).fill(0)
    let rightMaxArr = new Array(height.length).fill(0)
    leftMaxArr[0] = height[0]
    rightMaxArr[rightMaxArr.length - 1] = height[height.length - 1]
    let ans = 0
    for (let i = 1; i < height.length; i++) {
        leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i])
    }
    for (let i = height.length - 2; i > 0; i--) {
        rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i])
    }
    console.log(leftMaxArr, rightMaxArr)
    for (let i = 1; i < height.length; i++) {
        ans += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]
    }
    return ans
};
// @lc code=end

