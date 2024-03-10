const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter a number to search for in the array: ", function (answer) {
	const target = parseInt(answer);
	console.log("Linear Search Index:", linearSearch(array, target));
	console.log("Binary Search Index:", binarySearch(array, target));
	console.log(
		"Recursive Binary Search Index:",
		recursiveBinarySearch(array, target)
	);
	rl.close();
});

rl.on("close", function () {
	process.exit(0);
});

