const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((total, value) => (total += value), 0);
};

const multiply = function (arr) {
	return arr.reduce((total, value) => (total *= value));
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;

  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }

  return num;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
