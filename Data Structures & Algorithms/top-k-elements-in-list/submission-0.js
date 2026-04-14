class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create a map and count the occurences
        const count_map = new Map();
        for(const num of nums) {
            count_map.set(num, (count_map.get(num) || 0) + 1);
        }
        const entries = Array.from(count_map.entries());
        // entries = [[1, 3], [2, 2], [3, 1]]

        entries.sort((a, b) => b[1] - a[1]);
        // Sorts by second element (frequency) descending
        // entries = [[1, 3], [2, 2], [3, 1]]

        const result = [];
        for (let i = 0; i < k; i++) {
          result.push(entries[i][0]); // entries[i][0] = key (number)
        }
        // k=2 → result = [1, 2]

        return result;
    }
}