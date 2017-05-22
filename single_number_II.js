/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    nums.sort();
    var result;
    for(var i=0; i<nums.length; i=i+3){
        if(nums[i] != nums[i+2]){
            result = nums[i] ^ nums[i+1];
            result = result ^ nums[i+2];
        }
    }
};
