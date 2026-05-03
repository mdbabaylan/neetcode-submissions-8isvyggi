class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
    let longestSequence = 0;
    let temporarySequence = 0;

    for(let i = 0; i < nums.length; i++){
      //console.log(num)
      if(nums[i] == 1){
        temporarySequence++;
      }else{
        longestSequence = Math.max(longestSequence,temporarySequence);
        temporarySequence = 0;
      }
       longestSequence = Math.max(longestSequence,temporarySequence);
    }
    return longestSequence;
  }
}
