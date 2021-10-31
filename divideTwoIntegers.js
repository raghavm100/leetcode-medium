// ==== Problem Statement: https://leetcode.com/problems/divide-two-integers/ ====

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let multiplier = dividend < 0 || divisor < 0 ? -1 : 1
    multiplier = dividend < 0 && divisor < 0 ? 1 : multiplier
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    
    if(dividend < divisor)
        return 0
    else if(dividend === divisor)
        return 1 * multiplier
    else if(divisor === 1){
        if(dividend > Math.pow(2,31)-1 && multiplier > 0) return Math.pow(2,31) - 1
        // else if()
        return dividend * multiplier   
    }
    else{
        
        let lastVal = divisor
        let i = 1
        while(lastVal <= dividend){
            lastVal += divisor
            i++
        }
        
        return (i-1) * multiplier
    }
};