// The count-and-say sequence is the sequence of integers beginning as follows:
// 1, 11, 21, 1211, 111221, ...

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth sequence.

// Note: The sequence of integers will be represented as a string.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function convert(str) {
        var result = "";
        if(str.length === 1) {
            result = "1" + str;
            return result;
        }
        var tmpCount = 1;
        var firstStr = str[0];
        // more than one nums
        for(var i=1; i<str.length; i++) {
            if(str[i] === str[i-1]) {
                tmpCount++;
            }else{
                result += tmpCount + str[i-1]
                tmpCount = 1;
            }
        }
        result += tmpCount + str[i-1];
        return result;
    }
    if(n==1) {
        return "1";
    } else {
        return convert(countAndSay(n-1))
    }
};

var a = "1"
var b = "11"
var c = "21"
var d = "1211"

// console.log(convert("111221"))
console.log(countAndSay(4))