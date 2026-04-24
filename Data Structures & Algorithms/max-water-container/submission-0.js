class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let high_score = 0;


        while (left < right){
          let width = right - left
          let height = Math.min(heights[left], heights[right]);
          let area = width * height;

          if(area > high_score){
            high_score = area;
          }

          if(heights[left] < heights[right]){
            left++; //move right
          }else{
            right--; //move left
          }
          //console.log("return high score "+high_score);
        }
        return high_score
    }
}
