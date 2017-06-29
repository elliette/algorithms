// SINGLY LINKED LIST

function Node (value, next) {
	this.value = value;
	this.next = next || null;
}

function LinkedList ( ) {
	this.head = null;
}

LinkedList.prototype = {

	print: function () {
		let current = this.head;
		const array = [];
		while ( current ) {
			array.push( current.value );
			current = current.next;
		}
		array.push('null');
		return array.join(' -> ');
	},

	append: function ( newVal ) {
		const node = new Node(newVal);
		// if the linked list is empty
		if ( !this.head ) {
			this.head = node;
			return this;
		}
		// otherwise, loop through until we find the end of the list (this is why having a tail would be useful)
		let current = this.head;
		while ( current.next ) {
			current = current.next;
		}
		current.next = node;
		return this;
	},

	delete: function ( deleteVal ) {
		// deleting the head from a linked list with only one node
		if ( deleteVal === this.head.value && !this.head.next ) {
			this.head = null;
			return this;
		}
		// deleting the head of a linked list with multiple nodes
		if ( deleteVal === this.head.value ) {
			this.head = this.head.next;
			return this;
		}
		// otherwise, loop through the linked list and keep track of the current node we are on and the one before it
		// if the current node's value is the one we are looking for, we will connect the previous node with the node after the current node
		let previous = this.head;
		let current = this.head.next;
		while ( current ) {
			if ( current.value === deleteVal ) {
				previous.next = current.next;
				return this;
			} else {
				current = current.next;
				previous = previous.next;
			}
		}
		// if the linked list doesn't contain the value we want to delete, just return it as is
		return this;
	},

	splice: function ( index ) {
		// if we are deleting the head from a linked list with only one node
		if ( !index && !this.head.next ) {
			this.head = null;
			return this;
		}
		// if we are deleting the head from a linked list with many nodes
		if (!index) {
			this.head = this.head.next;
			return this;
		}
		// otherwise loop through the linked list until we find the index of the node we want to delete
		let previous = this.head;
		let current = this.head.next;
		let count = 1;
		while ( current ) {
			if ( count === index ) {
				previous.next = current.next;
				return this;
			} else {
				previous = previous.next;
				current = current.next;
			}
		}
		// if the index is greater than the linked list's size (ie we never find the index) then return the list as it is
		return this;
	},

	removeDuplicates: function () {
		const values = [ this.head.value ];
		let previous = this.head;
		let current = this.head.next;
		while ( current ) {
			if ( values.includes( current.value )) {
				previous.next = current.next;
			} else {
				values.push( current.value );
				previous = previous.next;
			}
			current = current.next;
		}
		return this;
	}
};

// implement an algorithm to find the nth to last element in a singly linked list
function nthToLast (list) {
	// if linked list is only one node return -1
	if ( !list.head.next ) {
		return -1;
	}
	// otherwise, keep track of previous (starting with head) and current node
	// if current node's next is null, return the previous
	let previous = list.head;
	let current = list.head.next;

	while ( current ) {
		if ( !current.next ) {
			return previous;
		}
		previous = previous.next;
		current = current.next;
	}
}
