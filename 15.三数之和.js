/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = []
    nums.sort((a, b) => a - b)
    let tmp = Array.from(new Set(nums))
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
        if (nums[i] === nums[i - 1] && i > 0) continue
        
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                arr.push([nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++
                while (nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            }
        }
    }
    return arr
};
// @lc code=end

