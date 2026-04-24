class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let min_buy = prices[0];

        /*
        max profit
        can skip
        */

        for(let i = 0; i < prices.length; i++){
          min_buy = Math.min(min_buy, prices[i]);
          let current_profit = prices[i] - min_buy;
          //global scope for profit and min_buy, one loop only, keeping track of the lowest buy price will give us the highest profit
          profit = Math.max(current_profit, profit)
        }
        return profit;
    }
}
