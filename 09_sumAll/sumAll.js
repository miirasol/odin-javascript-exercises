const sumAll = (a, b) => {
	if (
		a < 0 ||
		b < 0 ||
		isNaN(a) ||
		isNaN(b) ||
		!Number.isInteger(a) ||
		!Number.isInteger(b)
	) {
		return "ERROR";
	}

	let sum = 0;
	let temp = 0;

	if (a > b) {
		temp = a;
		a = b;
		b = temp;
	}

	for (let i = a; i <= b; i++) {
		sum += i;
	}

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
