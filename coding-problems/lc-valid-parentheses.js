/*
VALID PARENTHESES:

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

var isValid = function(s) {
    let rightBraces = '[{(';
    let leftBraces = ']})';
    let stack = [];
    for (var i = 0; i < s.length; i++){
        if (rightBraces.indexOf(s[i]) > -1){
            stack.push(s[i]);
        } else if ( leftBraces.indexOf(s[i]) > -1 ){
            if (leftBraces.indexOf(s[i]) === rightBraces.indexOf(stack[stack.length - 1])){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length) return false;
    else return true;
};
