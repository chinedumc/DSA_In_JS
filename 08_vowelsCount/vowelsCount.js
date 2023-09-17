const vowelsCount = (str) => {
  const formattedStr = str.toLowerCase() 
	let count = 0;
	for (let i = 0; i < formattedStr.length; i++) {
    char = formattedStr[i]
		if (
			char === "a" ||
			char === "e" ||
			char === "i" ||
			char === "o" ||
			char === "u"
		) {
			count += 1;
		}
	}
	return count;
  // console.log(count);
};
// vowelsCount("hElloEMdO");
module.exports = vowelsCount;
