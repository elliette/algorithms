/*
LETTER COMBINATIONS OF A PHONE NUMBER:

Given a digit string, return all possible letter combinations that the number could represent.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = function(numStr) {

	function recurse (numStr) {
	    if (!numStr.length) return [''];

		var letterMap = {
			1: '',
			2: 'abc',
			3: 'def',
			4: 'ghi',
			5: 'jkl',
			6: 'mno',
			7: 'pqrs',
			8: 'tuv',
			9: 'wxyz',
		};

		var combos = [];

		recurse(numStr.slice(1))
		.forEach(subStr => {
			var lettersOnButton = letterMap[numStr[0]];
			if (lettersOnButton.length){
				lettersOnButton
				.split('') // 'abc' becomes ['a', 'b', 'c']
				.forEach(letter => combos.push(letter + subStr) );
			} else { // in the case of 1, which returns an empty string
				combos.push(subStr);
			}
		});
		return combos.sort();
    }
    var result = recurse(numStr);
    if (result.length === 1) return [];
    else return result;
};
