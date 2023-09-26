const phonenumberDir = (phoneNum_Name) => {
	const directory = new Map();

	for (const entry of phoneNum_Name) {
		const [name, phoneNum] = entry.split(":");

		directory.set(name, phoneNum);
	}
	return directory;
  // console.log(directory);
};

// phonenumberDir(["John:335-099-245","Joe:112-113-114"]);

module.exports = phonenumberDir