/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0
    let right = 1
    while (left < right) {
        if (nums[left] + nums[right] === target) {
            return [left, right]
        } else if (right === nums.length - 1) {
            right = ++left + 1
        } else {
            right++
        }
    }
};
// @lc code=end

