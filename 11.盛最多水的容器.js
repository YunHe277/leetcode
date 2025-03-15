/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length
    let left = 0
    let right = n - 1
    let max = 0
    while (left < right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return max
};
// @lc code=end

