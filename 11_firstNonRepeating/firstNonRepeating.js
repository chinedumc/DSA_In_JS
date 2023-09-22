function firstNonRepeatingChar(str) {
	const charCount = {};

	for (const ch of str) {
		charCount[ch] = (charCount[ch] || 0) + 1;

		// console.log(charCount[ch]);
		// console.log(ch)
	}

	for (const ch of str) {
		if (charCount[ch] === 1) {
			return ch;
		}
	}
	return null;
}

// firstNonRepeatingChar("national");
module.exports = firstNonRepeatingChar