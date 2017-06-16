/*
MEDIAN OF TWO SORTED ARRAYS:

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(leftArr, rightArr) {
    var mergedArr = [];
    var leftIndex = 0;
    var rightIndex = 0;

    while (leftArr[leftIndex] || rightArr[rightIndex]) {
        var leftVal = leftArr[leftIndex];
        var rightVal = rightArr[rightIndex];
        if (rightVal === undefined || leftVal <= rightVal){
            mergedArr.push(leftVal);
            leftIndex++;
        } else if (leftVal === undefined || rightVal <= leftVal){
            mergedArr.push(rightVal);
            rightIndex++;
        }
    }
    if (mergedArr.length % 2 === 0){
        var secondIndex = mergedArr.length / 2;
        var firstIndex = secondIndex--;
        return (mergedArr[firstIndex] + mergedArr[secondIndex]) / 2;
    } else {
        return mergedArr[Math.floor(mergedArr.length / 2)];
    }
};
