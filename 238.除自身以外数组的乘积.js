/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = []
    nums.forEach((val, index) => {
        let tmp = nums
        tmp.splice(tmp.indexOf(val), 1)
        arr[index] = tmp.reduce((p, c) => p * c)
    })
    return arr
};
// @lc code=end

