// const isPalindrome = (str) => {
// 	const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reversedStr = ''

// 	for (let i = formattedStr.length - 1; i >= 0; i--) {
// 		reversedStr += formattedStr[i];
// 	}
// 	console.log(reversedStr);
// 	console.log(formattedStr);
// 	if (formattedStr === reversedStr) {
// 		return true;
// 	} else {
// 		return "Is not a palindrome";
// 	}
// };

const isPalindrome = (str) => {
const formattedStr = removeNonAlphanumeric(str.toLowerCase())
const reversedStr = reverseStr(formattedStr)
  return formattedStr === reversedStr ;
}
const removeNonAlphanumeric = (str) => {
  let formattedStr = "";
  
	for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
		if (isAlphanumeric(char)) {
      formattedStr += char;
		}
	}
  
	return formattedStr
	// console.log(formattedStr);
};

const isAlphanumeric = (char) => {
  const code = char.toLowerCase().charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
};

const reverseStr = (str) => {
 let reversed = ''

  for(let i=str.length - 1; i>=0;i--) {
    reversed += str[i]
  }
  return reversed
};
module.exports = isPalindrome;
