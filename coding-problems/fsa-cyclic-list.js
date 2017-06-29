/*
=============================================================
Problem : CYCLICAL LINKED LIST

Given the head of a singly linked list, determine if there is a cycle within the linked list. If there is a cycle, return true and log the length of the cycle and the first node in the cycle. If there is no cycle, return false.

Here's the catch:
You cannot use any additional data structures, including modifying the existing data structure. No arrays, no objects, no maps, no linked lists, etc.

~~~ The following Node constructor and buildLinkedList function are provided for you ~~~
=============================================================
*/

function Node (value) {
    this.value = value;
    this.next = null;
}

function buildLinkedList (linkedListLength, cycleLength) {
    if (cycleLength >= linkedListLength) {
        throw new Error('cycleLength must be smaller than linkedListLength');
    }
    var newNode;
    var startNode =  new Node(randomNum());
    this.head = startNode;
    var previous = startNode;

    for (var i = 1; i < linkedListLength; i++) {
        newNode = new Node(randomNum());
        previous.next = newNode;
        previous = newNode;
        if (i === linkedListLength - cycleLength) {
            var startingNodeOfCycle = newNode;
        }
    }
    newNode.next = startingNodeOfCycle;

    // print out the cyclic linked list:
    let current = startNode;
    let count = 0;
    let listString = '';
    while (count < linkedListLength + 3 * ( cycleLength )) {
        listString += current.value + ' -> ';
        current = current.next;
        count++;
    }
    console.log(listString + 'etc');
    return startNode;
}

function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

var linkedList = buildLinkedList(6, 4);

/* ===========================================================
~~~~~~~~~~~~~ Solution below ~~~~~~~~~~~~
=============================================================
*/

function findCycle ( list ) {
    let leftNode = list;
    let rightNode = list.next;

    // FIND A CYCLE
    while ( leftNode !== rightNode  ) {
        // move left node up one
        leftNode = leftNode.next;
        // move right node over one more then one more right
        rightNode = rightNode.next.next;
    }
    console.log('Found a cycle where the left node is', leftNode.value, 'and the rightNode is', rightNode.value, '...');

    // FIND CYCLE LENGTH
    rightNode = leftNode.next;
    let length = 1;
    while ( rightNode !== leftNode ){
        length++;
        rightNode = rightNode.next;
    }
    console.log('The cycle length is', length);

    // FIND START OF CYCLE
    leftNode = list;
    rightNode = list;
    let steps = 0;
    while (steps < length) {
        rightNode = rightNode.next;
        steps++;
    }
    let start = 1;
    while (leftNode !== rightNode) {
        start++;
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    console.log('The starting node is at place', start, 'and has the value of', leftNode.value);
}

findCycle(linkedList);
