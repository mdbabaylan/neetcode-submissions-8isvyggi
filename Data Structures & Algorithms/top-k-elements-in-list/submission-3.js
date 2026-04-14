class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
topKFrequent(nums, k) {
  // 1. Count frequencies
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // 2. Create buckets array
  // Size = nums.length + 1 because max frequency could be nums.length
  const buckets = new Array(nums.length + 1);

  // Initialize each bucket as empty array
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // 3. Put numbers into buckets based on frequency
  for (const [num, freq] of count) {
    buckets[freq].push(num);
  }

  // 4. Collect top k from buckets
  const result = [];

  // Start from highest frequency (end of array) and go down
  for (let freq = buckets.length - 1; freq >= 0; freq--) {
    // Current bucket contains numbers with this frequency
    const bucket = buckets[freq];

    // Add all numbers from this bucket
    for (let i = 0; i < bucket.length; i++) {
      result.push(bucket[i]);

      // Stop when we have k numbers
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}

}