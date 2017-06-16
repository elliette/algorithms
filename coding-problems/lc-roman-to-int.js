/*
ROMAN TO INTEGER:

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function(s) {
	var integer = 0;
	var numeralToInt = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	var curr = 0;
	while (curr < s.length) {
		var leftInt = numeralToInt[s[curr]];
		var rightInt = numeralToInt[s[curr + 1]];
		if (leftInt < rightInt ) {
			integer += ( rightInt - leftInt );
			curr += 2;
		} else {
			integer += leftInt;
			curr++;
		}
	}
	return integer;
};
