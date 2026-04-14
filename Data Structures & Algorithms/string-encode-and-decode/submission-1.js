class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // strs = ["Hello","World"]
        let encoded = "";
        for (let s of strs){
            encoded += s.length + "#" + s;
        }
        return encoded; //#5hello#5World
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // #5hello#5World - decode
        //find the #
        let result = [];
        let i = 0;
            while (i < str.length){
                let j = i;
                while(str[j] !== '#'){
                j++;
                }
                let length = parseInt(str.substring(i, j));
                i = j + 1;
                result.push(str.substring(i, i+length))
                i += length;  
            }
   
        return result;
    }

}
