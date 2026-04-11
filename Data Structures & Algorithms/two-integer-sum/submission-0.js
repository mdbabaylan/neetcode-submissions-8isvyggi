class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const map = new Map();
        for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i]; // Calculate complement for THIS number
          if (map.has(complement)) return [map.get(complement), i]; // Found pair
          map.set(nums[i], i); // Remember this number for future complements
        }
    return [];
}
}
