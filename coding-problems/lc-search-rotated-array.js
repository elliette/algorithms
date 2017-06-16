/*
SEARCH IN ROTATED SORTED ARRAY:

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

var search = function(nums, target) {

    function findSplit (nums) {
		var split = 0;
		nums.forEach( (num, i) => {
			if (num > nums[i + 1]){
				split = i;
			}
		});
		return split;
	}

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


	var cutOff = findSplit(nums);
	if ( cutOff === 0 ) {
		return binarySearch(0, nums.length - 1, nums, target );
	} else if (target >= nums[0]) {
		return binarySearch(0, cutOff, nums, target );
    } else {
		return binarySearch(cutOff + 1, nums.length - 1, nums, target);
    }
};
