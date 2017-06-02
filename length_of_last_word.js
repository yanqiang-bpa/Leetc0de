// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// For example, 
// Given s = "Hello World",
// return 5.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var len = s.length;
    var i = len - 1;
    // if space
    while(!/^[A-Za-z]+$/.test(s[i])){
        i--;
        if(i==-1){
            return 0;
        }
    }
    var last_char_index = i;
    var result = 0;
    for(var i=last_char_index; i>-1; i--) {
        if(/^[A-Za-z]+$/.test(s[i])){
            result++;
        }else{
            return result;
        }
    }
    return result;
};

var s = "hello world"
var a = "abc"
var b = "a     cb  "
var c = " sq     1   "
var d = ''

console.log(lengthOfLastWord(c))