class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let cache = new Array(128).fill(-1);
        let left = 0; //initialize at 0
        let maxLen = 0;
        
        for(let right = 0; right < s.length; right++){
          // Step A: Get the numeric code (e.g., 'a' becomes 97)
          let code = s.charCodeAt(right);
        
          // Step B: Check the locker
          if (cache[code] >= left) {
              // Jump the left pointer to "amputate" the duplicate
              left = cache[code] + 1;
          }
        
          // Step C: Update the locker with the current location
          cache[code] = right;
        
          // NEW: Measure the current "rubber band" stretch
          let currentWindowSize = right - left + 1;
        
          // NEW: If this stretch is longer than our record, update the record
          if (currentWindowSize > maxLen) {
              maxLen = currentWindowSize;
          }
        }
        return maxLen;
    }
}
