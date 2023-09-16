const isPalindrome = (str) => {
	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = ''

	for (let i = formattedStr.length - 1; i >= 0; i--) {
		reversedStr += formattedStr[i];
	}
	console.log(reversedStr);
	console.log(formattedStr);
	if (formattedStr === reversedStr) {
		return true;
	} else {
		return "Is not a palindrome";
	}
};

module.exports = isPalindrome;
