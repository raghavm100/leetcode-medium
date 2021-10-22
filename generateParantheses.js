// ==== Problem statement: https://leetcode.com/problems/generate-parentheses/ ====


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let result = []
    let open = 0
    let close = 0
    let tempRes = ""
    
    function build(open, close, tempRes){
        if(tempRes.length === n*2){
            result.push(tempRes)
            return
        }
        
        if(open < n){
            build(open+1, close, tempRes.concat("("))
        }
        
        if(close < open){
            build(open, close+1, tempRes.concat(")"))
        }
    }
    
    build(open, close, tempRes)
    return result
};