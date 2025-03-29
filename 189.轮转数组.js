/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let index = i + k < nums.length ? i + k : (i + k) % nums.length
        arr[index] = nums[i]
    }
    arr.forEach((val, index) => nums[index] = val)
    return nums
};
// @lc code=end

