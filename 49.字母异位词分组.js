/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for (let s of strs) {
        let arr = Array.from(s)
        arr.sort()
        let key = arr.toString()
        let list = map.get(key) ? map.get(key) : []
        list.push(s)
        map.set(key, list)
    }
    return Array.from(map.values())
};
// @lc code=end

