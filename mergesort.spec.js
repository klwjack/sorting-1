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
    // your code here
    expect( split([5, 3, 2, 1, 1, 1, 2, 2, 4, 2, 4]) ).toEqual( [[1, 1, 1, 2, 2, 2], [2, 3, 4, 4, 5]] );
  });

  it('is able to split an array into two halves -even', function() {
    // your code here
    expect( split([5, 3, 2, 1]) ).toEqual( [[5, 3], [2, 1]] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});
