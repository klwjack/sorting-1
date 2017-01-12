function split(array) {
	return [array.splice(0, Math.ceil(array.length / 2)), array]
}