class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        
        for (const word of strs){
            const count = Array(26).fill(0) //create a char count for the letters, more efficient than sorting
            for (const char of word){
                count[char.charCodeAt(0) - 97]++;
            }
            const key = count.join(',');

            if (map.has(key)){
                map.get(key).push(word); 
            } else {
                map.set(key, [word])
            }
        }
        return Array.from(map.values());
    }
}
