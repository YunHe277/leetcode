/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    let left = 0
    let right = 0
    let max = 1
    let common = {}
    while (left < s.length) {
        if (!common[s[right]] && s[right]) {
            common[s[right]] = 1
            right++
        } else {
            common[s[left]] = 0
            left++
        }
        max = Math.max(max, right - left)
    }
    return max
};
// @lc code=end

