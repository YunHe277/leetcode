/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    let arr = nums
    arr.sort()
    let first = arr[0]
    let count = 1
    let max = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === first + 1) {
            count++
        } else if (arr[i] === first) {
            continue
        } else {
            count = 1
        }
        first = arr[i]
        max = Math.max(max, count)
    }
    return max

    // let set = new Set(nums)
    // let count = 0
    // for (let n of nums) {
    //     if (set.has(n - 1)) continue

    //     let next = n + 1
    //     while(set.has(next)) {
    //         next++
    //     }
    //     count = Math.max(count, next - n)
    // }
    // return count
};
// @lc code=end

