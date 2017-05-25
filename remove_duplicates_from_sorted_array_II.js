/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length;
    if (len < 2) {
        return len;
    }
    var result = 1;
    var current = nums[0];
    var times = 0;
    for (var i = 1; i < len; i++) {
        if (nums[i] != current) {
            result++;
            nums[result-1] = nums[i];
            times = 0;
        } else {
        	if(times < 1){
        		result++;
        		nums[result-1] = nums[i];
        		times++;
        	}else{
        		times++;
        	}
        }
        current = nums[i];
    }
    // 坑在这里，题目要求nums也要被改变
    nums.length = result;
    return result;
};

// nums = [1,1,1,1,3,3]
// console.log(removeDuplicates(nums))
// console.log(nums)