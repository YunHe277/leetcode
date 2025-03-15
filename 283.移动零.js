/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0
    let right = 1
    while(left < right && right < nums.length) {
        if (nums[left] === 0 && nums[right] === 0) {
            right++
        } else if (nums[left] === 0) {
            nums[left] = nums[right]
            nums[right] = 0
        } else {
            left++
            right = left + 1
        }
    }
};
// @lc code=end

