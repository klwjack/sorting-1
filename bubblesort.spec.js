describe('swap', function(){
	it('swaps elements', function () {
		var currentArray = [1, 2];
		swap(currentArray, 0);
		expect( currentArray ).toEqual([2, 1]);
	});
	it('swaps elements at another index', function () {
		var currentArray = [1, 2, 3, 4];
		swap(currentArray, 2);
		expect( currentArray ).toEqual([1, 2, 4, 3]);
	});
});

describe('compare', function(){
	it('compares elements', function () {
		expect( compare([1, 2], 0) ).toEqual([true]);
		expect( compare([1, 1], 0) ).toEqual([false]);
		expect( compare([2, 1], 0) ).toEqual([false]);
	});
	it('compares elements at another index', function () {
		expect( compare([2, 1, 3, 4], 2) ).toEqual([true]);
		expect( compare([1, 2, 3, 3], 2) ).toEqual([false]);
		expect( compare([1, 2, 4, 3], 2) ).toEqual([false]);
	});
});

describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});
	it('handles an array with one item', function(){
		expect( bubbleSort([1]) ).toEqual( [1] );
	});
	it('handles a sorted array', function(){
		expect( bubbleSort([1, 2, 3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles a reverse-sorted array', function(){
		expect( bubbleSort([5, 4, 3, 2, 1]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles a random-sorted array', function(){
		expect( bubbleSort([5, 3, 2, 1, 4]) ).toEqual( [1, 2, 3, 4, 5] );
	});
	it('handles an array with duplicates ', function(){
		expect( bubbleSort([5, 3, 2, 1, 1, 1, 2, 2, 4, 2, 4]) ).toEqual( [1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5] );
	});
});