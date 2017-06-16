/* 
SEARCH FOR A RANGE:

Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

var searchRange = function(nums, target) {
    function binarySearch (startI, endI, array, target){

		if (array[startI] === target) return startI;
		if (array[endI] === target) return endI;
		if (endI - startI < 1) return -1;

		var mpIndex = Math.floor((startI + endI) / 2);
		if (array[mpIndex] === target){
			return mpIndex;
		} else if (array[mpIndex] > target) {
			return binarySearch(startI, mpIndex - 1, array, target);
		} else if (array[mpIndex] < target) {
			return binarySearch(mpIndex + 1, endI, array, target);
		}
	}

	var index = binarySearch(0, nums.length - 1, nums, target);

    var startIndex = index;
	while (nums[startIndex - 1] === target) {
	    startIndex--;
	}
	var endIndex = index;
	while (nums[endIndex + 1] === target ) {
	    endIndex++;
	}

	return [startIndex, endIndex];
};
