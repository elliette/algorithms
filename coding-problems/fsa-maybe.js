/*
=============================================================
Implement a maybe factory or constructor. This function should return values implementing the "Maybe" API. For the purpose of this REACTO, that means Maybes need value and map methods.

A Maybe's value returns the value held by the Maybe.

Example:

	const maybe5 = maybe(5)
	console.log(maybe5.value()) // 5

The map method takes a mapping function f and can be chained. The result can still report its value:

Example:

	maybe('yo')
	.map(s => s.length)
	.map(n => n + '!')
	.value() // '2!'

Critically, Maybes protect against null/undefined values, preventing them from being used in calculations:

Example:

	maybe({name: 'Hermione'})
	.map(person => person.sister) // undefined
	.map(sibling => sibling.age) // uh oh!
	.map(num => num % 2)
	.value() // undefined - no thrown errors! :-)

=============================================================
*/

function maybe(val){

	function MaybeConstructor(value){
		this._value = value;
	}

	MaybeConstructor.prototype = {
		map: function(fn){
			try {
				return maybe(fn(this._value));
			} catch (err) {
				return maybe(undefined);
			}
		},
		value: function(){
			return this._value;
		}
	};
	return new MaybeConstructor(val);
}
