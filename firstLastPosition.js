// ==== Problem statement: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ ====


/*
    ====
    Algo : 
    1. Used Binary search for running the solution on O(log n)
    2. this binary search runs twice, once to find the lower index
    and the other one to find the higher index.
    3. if none if these loops run, default values of -1 is returned.

    SC: O(1)
    TC: O(log n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let lower = -1
    let higher = -1
    
    let start = 0
    let end = nums.length-1
    let mid = Math.floor((start+end)/2)
    
    // ==== Finding lower bound ====
    while(start <= end && nums[start] <= target && nums[end] >= target){
        if(nums[mid] === target){
            lower = mid
            end = mid-1
        }
        else if(nums[mid]<target){
            start = mid+1
        }
        else{
            end = mid-1
        }
        
        mid = Math.floor((start+end)/2)
    }
    
    start = 0
    end = nums.length-1
    mid = Math.floor((start+end)/2)
    
    // ==== finding higher bound ====
    while(start <= end && nums[start] <= target && nums[end] >= target){
        if(nums[mid] === target){
            higher = mid
            start = mid+1
        }
        else if(nums[mid]<target){
            start = mid+1
        }
        else{
            end = mid-1
        }
        mid = Math.floor((start+end)/2)
    }
    
    return [lower, higher]
    
};