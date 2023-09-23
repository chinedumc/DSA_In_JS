const sumOfEvenSqrs = (number) => {
	const evenNums = number.filter((num) => num % 2 === 0);
	// console.log(evenNums);
	const sqEvenNums = evenNums.map((evenNum) => evenNum ** 2);
	// console.log(sqEvenNums);
	
		const sumSqEvenNums = sqEvenNums.reduce((total, sqEven) => {
			return total + sqEven;
		}, 0);
    // console.log(sumSqEvenNums);
	
	return sumSqEvenNums;
};

sumOfEvenSqrs([1, 2, 3, 4, 5, 6]);

module.exports = sumOfEvenSqrs;
