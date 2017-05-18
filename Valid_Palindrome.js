/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length==0){
    	return true;
    }
    var start = 0;
    var end = s.length - 1;
    while(start<end){
    	while (! /^[A-Za-z0-9]+$/.test( s[start] ))
    		start++;
    	while (! /^[A-Za-z0-9]+$/.test( s[end] ))
    		end--;
    	if( s[start] && s[end] && s[start].toLowerCase() != s[end].toLowerCase() )
    		return false;
    	else if( s[start] && s[end] && s[start].toLowerCase() == s[end].toLowerCase() ){
    		start++;
    		end--;
    	}
    }
    return true;
};

// var s = "A man, a plan, a canal: Panama";
// var s=".,"
// var s="0P"
