/*
REVERSE INTEGER:

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321


Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

function reverse(num){
	var isNegative = false;
	if (num < 0){
		isNegative = true;
		num = 0 - num;
	}

	var newDigits = [];
	while (num > 9){
		let lastNum = num % 10;
		let nextNum = (num - lastNum) / 10;
		newDigits.push(lastNum);
		num = nextNum;
	}
	if (num > 0) newDigits.push(num);

	var newInt = 0;
	var powerOfTen = newDigits.length - 1;
	for (var i = 0; i < newDigits.length; i++){
		let multiplier = Math.pow(10, powerOfTen);
		powerOfTen--;
		newInt += newDigits[i] * multiplier;
	}

//The largest possible 32-bit signed integer is 2^31 - 1  & the smallest possible is -2^31.

	if (isNegative){
		let result =  0 - newInt;
		return result < Math.pow(-2, 31) ? 0 : result;
	}
	return newInt > Math.pow(2, 31) - 1 ? 0 : newInt;
}
