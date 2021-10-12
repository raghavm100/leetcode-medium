// ==== Problem Statement: https://leetcode.com/problems/letter-combinations-of-a-phone-number/ ====

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(digits.length === 0) return []
    
    let tempArr = []
    let calcArr = []
    let resultArr = []
    
    let numMap = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    
    let i = 1
    resultArr = numMap[digits[0]]
    
    while(i < digits.length){
        tempArr = numMap[digits[i]]
        calcArr = []
        for(let j=0; j<resultArr.length;j++){
            for(let k=0; k<tempArr.length; k++){
                calcArr.push(resultArr[j]+tempArr[k])
            }
        }
        i++
        resultArr = calcArr
    }
    
    return resultArr   
};