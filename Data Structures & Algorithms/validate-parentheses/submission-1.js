class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let stack = [];
            const bracketMap = {
                ')': '(',  // Closing paren matches opening paren
                '}': '{',  // Closing curly matches opening curly
                ']': '['   // Closing bracket matches opening bracket
            };


            for(let i = 0; i < s.length; i++){
                if (bracketMap[s[i]]) {
                  // it's a closing bracket
                  let top = stack.pop();
                  if (bracketMap[s[i]] !== top) {
                    return false;  // mismatch! wrong bracket type
                  }
                }else{
                    stack.push(s[i])
                }
            }


            if (stack.length === 0) {
                return true; //empty stack means its properly closed
            }else{
                return false;
        }
    }
}
