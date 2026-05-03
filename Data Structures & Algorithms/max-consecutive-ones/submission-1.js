class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
    let max = 0, cur = 0;

    for (const n of nums) {
      cur = n === 1 ? cur + 1 : 0;
      max = Math.max(max, cur);
    }

    return max;
  }
}
