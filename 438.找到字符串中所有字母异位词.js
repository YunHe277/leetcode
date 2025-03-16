/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let countP = new Array(26).fill(0)
  let countS = new Array(26).fill(0)

  let ans = []
  for (let str of p) {
    countP[str.charCodeAt() - 'a'.charCodeAt()]++
  }
  for(let right = 0; right < s.length; right++) {
    countS[s[right].charCodeAt() - 'a'.charCodeAt()]++
    let left = right - p.length + 1
    if (left < 0) continue

    if (countP.toString() === countS.toString()) {
      ans.push(left)
    }
    countS[s[left].charCodeAt() - 'a'.charCodeAt()]--
  }
  return ans
};
// @lc code=end