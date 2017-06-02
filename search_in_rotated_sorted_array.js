// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var binarySearch = function(nums, start, end, target) {
        if(start == end) {
            if(target == nums[start])
                return start;
            else
                return -1;
        }
        if(start > end) {
            return -1;
        }
        var mid = Math.floor((start + end)/2)
        if(nums[mid] === target) {
            return mid;
        } else if(target > nums[mid]){
            return binarySearch(nums, mid + 1, end, target);
        } else {
            return binarySearch(nums, start, mid - 1, target)
        }
    }
    var size = nums.length;
    var peak;
    var start, end;
    if(size === 0) {
        return -1;
    }
    if(size === 1) {
        if(nums[0] == target){
            return 0;
        } else {
            return -1;
        }
    }
    if(size === 2) {
        if(nums[0] === target){
            return 0;
        }else if(nums[1] === target){
            return 1;
        }else{
            return -1;
        }
    }
    for(var i=0; i< size - 1; i++) {
        if(nums[i] > nums[i+1])
            peak = i;
    }
    if(target < nums[0] && peak!==undefined) {
        return binarySearch(nums, peak + 1, size - 1, target);
    } else if(target >= nums[0] &&  peak!==undefined) {
        return binarySearch(nums, 0, peak, target)
    } else {
        return binarySearch(nums, 0, size - 1, target)
    }
};

// trouble cases:
// var a = [5, 3, 1]
// var a= [3, 1]
