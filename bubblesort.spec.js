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