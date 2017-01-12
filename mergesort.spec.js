describe('MergeSort', function() {


	it('handles an empty array', function(){
		expect( mergeSort([]) ).toEqual( [] );
	});
	it('handles an array with one item', function(){
		expect( mergeSort([1]) ).toEqual( [1] );
	});
	it('handles a sorted array', function(){
		expect( mergeSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles a reverse-sorted array', function(){
		expect( mergeSort([5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles a random-sorted array', function(){
		expect( mergeSort([5, 3, 2, 1, 4]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles an array with duplicates ', function(){
		expect( mergeSort([5, 3, 2, 1, 1, 1, 2, 2, 4, 2, 4]) ).toEqual( [1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5] );
	});
});

describe('Split Array function', function() {
	it('is able to split an array into two halves -odd', function() {
		expect( split([1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5]) ).toEqual( [[1, 1, 1, 2, 2, 2], [2, 3, 4, 4, 5]] );
	});

	it('is able to split an array into two halves -even', function() {
		expect( split([5, 3, 2, 1]) ).toEqual( [[5, 3], [2, 1]] );
	});
});

describe('Merge Sort', function(){
	it('is able to merge two items (backwards)', function(){
		expect( merge([4], [5]) ).toEqual( [4, 5] );
	});
	it('is able to merge two items', function(){
		expect( merge([5], [4]) ).toEqual( [4, 5] );
	});
	it('is able to merge two arrays by prepending one on the other', function(){
		expect( merge([5, 6], [3, 4]) ).toEqual( [3, 4, 5, 6] );
	});
	it('is able to merge two arrays by interleaving', function(){
		expect( merge([3, 6], [4, 5]) ).toEqual( [3, 4, 5, 6] );
	});
	it('is able to merge two arrays by interleaving', function(){
		expect( merge([3, 6, 7], [4, 5]) ).toEqual( [3, 4, 5, 6, 7] );
	});
	it('is able to merge two arrays by interleaving', function(){
		expect( merge([4, 6, 7], [2, 3, 5]) ).toEqual( [2, 3, 4, 5, 6, 7] );
	});
});
