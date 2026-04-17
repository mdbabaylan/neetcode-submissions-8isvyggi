class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxLength = 0;
    
        for (const num of numSet) {
            if (!numSet.has(num - 1)) {  // Check if start of sequence
                let currentNum = num;
                let currentLength = 1;
    
                while (numSet.has(currentNum + 1)) {  // Count consecutive
                    currentNum++;
                    currentLength++;
                }
    
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    
        return maxLength;
    }
}
