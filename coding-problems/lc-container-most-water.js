/*
CONTAINER WITH MOST WATER:
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

function containerMostWater (coordinates) {
	var leftY = 0;
	var rightY = coordinates.length - 1;
	var maxArea = 0;

	while (leftY < rightY) {
		var height = Math.min(coordinates[leftY], coordinates[rightY]);
		var width = rightY - leftY;
		var area = height * width;
		if (area > maxArea) {
			maxArea = area;
		}
		if (coordinates[leftY] < coordinates[rightY]) {
			leftY++;
		} else if (coordinates[leftY] === coordinates[rightY] ) {
			if (coordinates[leftY++] > coordinates[rightY--]) {
				leftY++;
			}
		} else {
			rightY--;
		}
	}
	return maxArea;
}
