// ==== Problem statement: https://leetcode.com/problems/valid-sudoku/ ====

/*
    ====
    Algo

    1. Brute force checking for 
        i Rows.
        ii Columns
        iii 3x3 blocks

    TC: O(1) because it's a 9x9 const size, but if the matrix was allowed to grow, then O(n^2)
    SC: O(n) because the mem value keeps storing data for every loop.
    ====
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
    let i = 0
    let j = 0
    
    // ==== Checking for all Rows ====
    while(i<9){
        if(!checkBlock(i, i, 0, 8, board)) return false
        i++
    }
    
    i = 0
    // ==== Checking for all columns ====
    while(i<9){
        if(!checkBlock(0, 8, i, i, board)) return false
        i++
    }
    
    i = 0
    // ==== Checking the 3x3 block ====
    while(i<9){
        j = 0
        while(j<9){
            if(!checkBlock(i, i+2, j, j+2, board)) return false   
            j += 3
        }
        i += 3
    }
    
    return true
    
};


function checkBlock(startRow, endRow, startCol, endCol, board){
    
    let mem = {}
    
    for(let i=startRow; i<=endRow; i++){
        for(let j=startCol; j<=endCol; j++){
            if(board[i][j] === ".") 
                continue
            else if(mem[board[i][j]])
                return false
            else
                mem[board[i][j]] = true
        }
    }
    
    return true
}