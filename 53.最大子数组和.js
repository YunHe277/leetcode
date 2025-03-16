/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let left = 0
    let sum = 0
    while (left < nums.length) {
        sum = Math.max(nums[left], sum + nums[left])
        max = Math.max(sum, max)
        left++
    }
    return max
};
// @lc code=end

