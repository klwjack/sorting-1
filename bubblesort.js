function bubbleSort(array) {
	var currentEnd = array.length - 1;
	/*for(var outer = 0; outer < array.length; outer++){
		for(var inner = 0; inner < array.length - 1 - outer; inner++){
			if(compare(array, inner))
				swap(array, inner);
		}
	}*/
	for(var outer = array.length - 1; outer >= 0; outer--){
		for(var inner = 0; inner < outer; inner++){
			if(compare(array, inner))
				swap(array, inner);
		}
	}
	return array;
}

function swap(array, leftIndex) {
	// mutates array, returns undefined
	var temp = array[leftIndex + 1];
	array[leftIndex + 1] = array[leftIndex];
	array[leftIndex] = temp;
}

function compare(array, leftIndex) {
	// returns boolean
	return array[leftIndex] >= array[leftIndex + 1];
}
