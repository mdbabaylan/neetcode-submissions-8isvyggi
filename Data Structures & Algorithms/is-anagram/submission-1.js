class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //lets create a scoreboard for each char instead of brute force sort/equality check
        let sorted_s = s.split('').sort().join('')
        let sorted_t = t.split('').sort().join('')
        return sorted_s === sorted_t;
    }






}
