// ==== Reverse 32 bit Integer : https://leetcode.com/problems/reverse-integer/submissions/ ====

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let sign = x < 0 ? -1 : 1
    x = Math.abs(x)
    
    let rem = 0
    let newNum = 0
    
    while(x !== 0){
        rem = x % 10
        newNum = (newNum * 10) + rem
        
        if(sign === -1 && newNum > Math.pow(2,31)){
            return 0
        }
        else if(sign === 1 && newNum > Math.pow(2,31)-1){
            return 0
        }
        x = Math.floor(x/10)
    }
    
    return newNum * sign
};