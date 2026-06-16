/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let que = [];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        while(que.length && que[0] <= i - k) {
            que.shift()
        }
        while(que.length && nums[i] > nums[que[que.length - 1]]) {
            que.pop()
        }
        que.push(i)

        if (i >= k - 1) {
            res.push(nums[que[0]])
        }
    }
    return res
};