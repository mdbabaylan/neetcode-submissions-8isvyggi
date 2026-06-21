class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const results = [];
        for(let i = 0; i < nums.length - 1; i++){
        // Optimization: If the fixed number is > 0, three positives can't sum to 0
        if (nums[i] > 0) break; 
        
        // Skip duplicate for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;
          let left = i+1;
          let right = nums.length - 1;

          while(left<right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
              results.push([nums[i],nums[left],nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;

              left++;
              right--;
            }else if(sum > 0){ //need smaller numbers, shift right to smaller number, since array is sorted
              right--;
            }else{ // if sum is negative, we need bigger numbers
              left++;
            } 
          }
        }
        //console.log(results);
        return results;
    }
}
