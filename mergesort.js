function split(array) {
	return [array.splice(0, Math.ceil(array.length / 2)), array]
}

function merge(left, right){
	var mergedArray = [];

	var indexLeft = 0;
	var indexRight = 0;

	while(indexLeft < left.length && indexRight < right.length){
		if(left[indexLeft] < right[indexRight]){
			mergedArray.push(left[indexLeft]);
			indexLeft++;
		}else{
			mergedArray.push(right[indexRight]);
			indexRight++;
		}
	}

	while(indexLeft < left.length){
		mergedArray.push(left[indexLeft]);
		indexLeft++;
	}

	while(indexRight < right.length){
		mergedArray.push(right[indexRight]);
		indexRight++;
	}

	return mergedArray;
}

function mergeSort(array){
	if(array.length <= 1)
		return array;
	var splitArray = split(array);
	console.log(splitArray);
	splitArray[0] = mergeSort(splitArray[0]);
	splitArray[1] = mergeSort(splitArray[1]);
	return merge(splitArray[0], splitArray[1]);
}
