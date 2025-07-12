const palindromes = function (string) {
	const punctuations = "!?., ";
	string = string.toLowerCase();
	let cleanText = "";

	const leftChar = (i) => cleanText.charAt(i);

	const rightChar = (i) => cleanText.charAt(cleanText.length - 1 - i);

	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (punctuations.indexOf(char) == -1) {
			cleanText += char;
		}
	}

	for (let i = 0; i < cleanText.length / 2; i++) {
		if (leftChar(i) != rightChar(i)) {
			return false;
		}
	}

	return true;
};

// Do not edit below this line
module.exports = palindromes;
