/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need = new Map();
    let window = new Map();
    let vaild = 0;
    let left = 0;
    let start = 0;
    let len = Infinity;
    for (ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    for (let right = 0; right < s.length; right ++) {
        let char = s[right];
        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1)

            if (window.get(char) === need.get(char)) {
                vaild++;
            }
        }

        while (vaild === need.size) {
            if (right - left + 1 < len) {
                len = right - left + 1;
                start = left;
            }
            let old = s[left]
            left++
            if (need.has(old)) {
                if (window.get(old) === need.get(old)) {
                    vaild--;
                }
                window.set(old, window.get(old) - 1);
            }
        }
    }
    return len === Infinity ? '' : s.slice(start, start + len)
};