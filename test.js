// var lst = ["a", "b", 'c'];
// var top = lst.pop();
// console.log(top)
// console.log(lst)

// var a=0;
// var b=6;

// console.log(Math.floor((a+b)/2))

var a = [3,4]

// binary search
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
console.log(binarySearch(a, 0, 1, 4))
