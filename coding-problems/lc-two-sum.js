/*
TWO SUM:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
*/

var twoSum = function (nums, target) {
    for (let outerIndex = 0; outerIndex < nums.length; outerIndex++){
        let outerNum = nums[outerIndex];
        for (let innerIndex = outerIndex + 1; innerIndex < nums.length; innerIndex++){
            let innerNum = nums[innerIndex];
            if (innerNum + outerNum === target){
                return [outerIndex, innerIndex];
            }
        }
    }
};
