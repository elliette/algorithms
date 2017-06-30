/*
=============================================================
Problem: Spy On

Testing and assertion libraries like Jasmine, Mocha, Chai, Sinon etc. have a special feature called spies. Spies allow test specs to track how specific functions of interest are used: whether they are called, how many times, what they are called with, what they return, if they throw errors, etc.

For this problem, implement a spyOn function which does the following:

Takes a function func as its parameter
Returns a spy function spy that takes any number of arguments
spy calls func with the given arguments and returns what func returns
spy has the following methods:
.getCallCount(): returns the number of times spy has been called
.wasCalledWith(val): returns true if spy was ever called with val, else returns false
.returned(val): returns true if spy ever returned val, else returns false

=============================================================
*/

function spyOn (func) {
	let callCount = 0;
	const calledWith = [];
	const returnedVals = [];

	const spy = (...args) => {
		callCount++;
		calledWith.push(...args);
		let result = func(...args);
		returnedVals.push(result);
		return result;
	};

	spy.getCallCount = () => callCount;
	spy.wasCalledWith = (val) => calledWith.includes(val);
	spy.returned = (val) => returnedVals.includes(val);

	return spy;
}
