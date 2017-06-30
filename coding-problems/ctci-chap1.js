// 1.1 Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?

const allUnique = ( str ) => str.split('').reduce( (isUnique, char, index) => (isUnique && str.indexOf(char) === index), true); // I like that with ES6 this is all one line!

// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0

function setZeros( matrix ){
	const rowsToMakeZero = [];
	const colsToMakeZero = [];
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if ( !matrix[row][col] ){
				rowsToMakeZero.push(row);
				colsToMakeZero.push(col);
			}
		}
	}

	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if ( rowsToMakeZero.includes( row ) || colsToMakeZero.includes( col )){
				matrix[row][col] = 0;
			}
		}
	}
	return matrix;
}

/*
1.8 Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
*/

function isSubstring(str, substr) {
  return str.includes(substr);
}

function isRotated(str1, str2) {
	const doubledStr = str2 + str2;
	return isSubstring(doubledStr, str1);
}
