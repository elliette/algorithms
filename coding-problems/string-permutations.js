/*
STRING PERMUTATIONS:

~The Question~

Given a string, return an array of all the permutations of that string. The permutations of the string should be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to be actual words.

Notes:

The array that is returned should only contain unique values
The array that is returned should be sorted alphabetically
Example:

makePerms('cat') => [ 'act', 'atc', 'cat', 'cta', 'tac', 'tca' ]

~The Approach~

Select each letter in the string one at a time.
Permute all the letters in the string except the selected one. This gives us an array of sub-permutations.
Concatenate the selected letter with each of the sub-permutations.
*/

function makePerms (str) {

	if (!str.length) return [''];

	const perms = [];

	for (let i = 0; i < str.length; i++) {
		const currentLetter = str[i];
		const otherLetters = str.slice(0, i) + str.slice(i + 1);
		const subPerms = makePerms(otherLetters);
		subPerms.forEach( subPerm => perms.push(currentLetter + subPerm) );
	}

	return perms
	.filter( (perm, index) => perms.indexOf(perm) === index )
	.sort();
}
