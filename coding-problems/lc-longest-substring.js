/*
LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS:

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    var currSubStr =  '';
    var longestLen = 0;
    for (var i = 0; i < s.length; i++){
        let j = i;
        while (s[j] && currSubStr.indexOf(s[j]) === -1){
            currSubStr += s[j];
            j++;
        }
        if (currSubStr.length > longestLen){
            longestLen = currSubStr.length;
        }
        currSubStr = '';
    }
    return longestLen;
};
