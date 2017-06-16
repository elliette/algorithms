/* 
LONGEST COMMON PREFIX:

Write a function to find the longest common prefix string amongst an array of strings.
*/

var longestCommonPrefix = function(arr) {
	if (!arr.length) return '';
	var prefix = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (!prefix.length) return '';
		var curr = arr[i];
		for (var j = 0; j < prefix.length; j++){
			if (prefix[j] !== curr[j]){
				prefix = prefix.slice(0, j);
				break;
			}
		}
	}
	return prefix;
};
