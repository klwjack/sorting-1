function bubbleSort(array) {
	var currentEnd = array.length - 1;
}

function swap(array, leftIndex) {
	// mutates array, returns undefined
	var temp = array[leftIndex + 1];
	array[leftIndex + 1] = array[leftIndex];
	array[leftIndex] = temp;
}

function compare(array, leftIndex) {
	// returns boolean
	return array[leftIndex] < array[leftIndex + 1];
}
