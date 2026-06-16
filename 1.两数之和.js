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
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i]
        if (map.has(need)) {
            return [map.get(need), i]
        } else {
            map.set(nums[i], i)
        }
    }
};
// @lc code=end

