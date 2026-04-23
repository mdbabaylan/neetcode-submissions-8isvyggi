class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //const numbers = [-4, -1, -1, 0, 1, 2];
        let three_sum_result = [];

        nums.sort((a, b) => a - b);

        // Outer loop: fix the first number
        for (let i = 0; i < nums.length; i++) {
    
    // Skip duplicate values for outer element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    // Inner: two pointers searching for pairs
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        
        if (sum === 0) {
            // Found one!
            three_sum_result.push([nums[i], nums[left], nums[right]]);
            
            // Move both pointers AND skip duplicates
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
            
            left++;
            right--;
        } 
        else if (sum < 0) {
            left++;  // need BIGGER → move left right
        } 
        else {
            right--;  // need SMALLER → move right left
        }
    }
        }
        return three_sum_result;
    }
}
