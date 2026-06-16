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
    let map = new Map();
    let left = 0;
    let ans = 0;
    for (let right = 0; right < s.length; right ++) {
        let char = s[right];
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1
        }
        map.set(char, right)
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};
// @lc code=end

