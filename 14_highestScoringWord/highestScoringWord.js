function highestScoringWord(str) {
	const words = str.split(" ");

	const scores = words.map((word) => {
		let score = 0;
		for (const letter of word) {
			score += letter.charCodeAt(0) - 96;
		}
		return score;
	});
	// return scores;
	// console.log(scores);

  let highestScore = 0;
  let highestIndex = 0;
	for (let i = 0; i < words.length; i++) {

		if (scores[i] > highestScore) {
			highestScore = scores[i];
      highestIndex = i
		}
	}

  // console.log(words[highestIndex]);
  return words[highestIndex]
}

// highestScoringWord("my take away from this");
module.exports = highestScoringWord;
