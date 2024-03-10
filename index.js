function linearSearch(array, targetValue) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === targetValue) {
			return i;
		}
	}
	return -1;
}

function binarySearch(array, targetValue) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (array[mid] === target) {
			return mid; // Target found
		} else if (array[mid] < targetValue) {
			left = mid + 1; // Search the right half
		} else {
			right = mid - 1; // Search the left half
		}
	}

	return -1; // Target not found
}

function recursiveBinarySearch(
	array,
	targetValue,
	left = 0,
	right = array.length - 1
) {
	if (left > right) {
		return -1; // Base case: target not found
	}

	const mid = Math.floor((left + right) / 2);

	if (array[mid] === targetValue) {
		return mid; // Target found
	} else if (array[mid] < targetValue) {
		return recursiveBinarySearch(array, targetValue, mid + 1, right); // Search the right half
	} else {
		return recursiveBinarySearch(array, targetValue, left, mid - 1); // Search the left half
	}
}

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;

// Linear search
console.log("Linear Search Index:", linearSearch(array, target));

// Binary search
console.log("Binary Search Index:", binarySearch(array, target));

// Recursive binary search
console.log(
	"Recursive Binary Search Index:",
	recursiveBinarySearch(array, target)
);

// Getting the value of the index for Linear Search
console.log("Value at index:", array[linearSearch(array, target)]);

// Getting the value of the index for Binary Search
console.log("Value at index:", array[binarySearch(array, target)]);

// Getting the value of the index for Recursive Binary Search
console.log("Value at index:", array[recursiveBinarySearch(array, target)]);

// Big O Notation
// Linear Search: O(n)
// Binary Search: O(log n)
// Recursive Binary Search: O(log n)

//  Most efficient search algorithm: Binary Search
//  Least efficient search algorithm: Linear Search

// What does O(log n) mean?
// O(log n) means that the time complexity of the algorithm grows logarithmically with the input size.
// In other words, as the input size increases, the time it takes to run the algorithm grows at a slower rate.
// This makes O(log n) algorithms very efficient for large input sizes.

// What does O(n) mean?
// O(n) means that the time complexity of the algorithm grows linearly with the input size.
// In other words, as the input size increases, the time it takes to run the algorithm grows at the same rate.
// This makes O(n) algorithms less efficient for large input sizes.

// What is the difference between O(log n) and O(n)?
// O(log n) algorithms have a time complexity that grows logarithmically with the input size, while O(n) algorithms have a time complexity that grows linearly with the input size.
// This means that O(log n) algorithms are more efficient than O(n) algorithms for large input sizes.
