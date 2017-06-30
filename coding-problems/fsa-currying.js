/*
=============================================================
Problem: Currying

Currying is the process by which a function of N arguments is implemented as N single-argument functions such that first of them takes in the first argument and returns a function which takes in the 2nd argument and so on, until the Nth single-argument function finally returns the value of the multi-argument function being implemented.

Example:

function calcAllFour (var1, var2, var3, var4) {
  return var1 + var2 - var3 * var4;
}
const curriedDoSomething = curry(calcAllFour); // closure memory -> []
const firstReturn = curriedDoSomething(1); // closure memory -> [1]
const secondReturn = firstReturn(2); // closure memory -> [1, 2]
const thirdReturn = secondReturn(3); // closure memory -> [1, 2, 3]
const fourthReturn = thirdReturn(4); // -9 -> (1 + 2 - 3 * 4)

Now you must be the Curry - implement the "curry" function to accomplish the previous example!

=============================================================
*/

function curry (func) {
	var args = [];
	var numArgsNeeded = func.length;
	return function wrapper (arg) {
		args.push(arg);
		if (args.length === numArgsNeeded) {
			return func(...args);
		} else {
			return wrapper;
		}
	};
}
