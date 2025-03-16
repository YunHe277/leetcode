/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let left = 0
    let right = 0
    let sum = 0
    let count = 0
    for(; left < nums.length; ) {
        sum += nums[right]
        if (sum === k) {
            count++
        }
        right++
        if (right === nums.length) {
            left++
            right = left
            sum = 0
        }
    }
    return count
};
// @lc code=end

