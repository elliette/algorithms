/*
====================================================================================
======Swap nodes in a linked list without swapping data (from Geeks for Geeks)======
====================================================================================

Given a linked list and two keys in it, swap nodes for two given keys. Nodes should be swapped by changing links. Swapping data of nodes may be expensive in many situations when data contains many fields.

It may be assumed that all keys in linked list are distinct.

Examples:

Input:  10->15->12->13->20->14,  x = 12, y = 20
Output: 10->15->20->13->12->14

Input:  10->15->12->13->20->14,  x = 10, y = 20
Output: 20->15->12->13->10->14

Input:  10->15->12->13->20->14,  x = 12, y = 13
Output: 10->15->13->12->20->14

This may look a simple problem, but is interesting question as it has following cases to be handled.
1) x and y may or may not be adjacent. ✅
2) Either x or y may be a head node. ❌ // Todo!
3) Either x or y may be last node. ✅
4) x and/or y may not be present in linked list. ✅
*/

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function swapNodes(list, val1, val2){
	let prev1, node1, prev2, node2, currPrev;
	let currNode = list;
	while (currNode){
		if (node1 && node2) break;
		if (currNode.val === val1){
			prev1 = currPrev;
			node1 = currNode;
		} else if (currNode.val === val2){
			prev2 = currPrev;
			node2 = currNode;
		}
		currPrev = currNode;
		currNode = currNode.next;
	}
	if (!node1 || !node2) return list;
	prev1.next = node2;
	prev2.next = node1;
	temp = node1.next;
	node1.next = node2.next;
	node2.next = temp;
	return list;
}
