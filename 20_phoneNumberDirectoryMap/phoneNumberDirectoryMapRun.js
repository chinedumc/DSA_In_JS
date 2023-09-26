const phonenumberDir = require('./phoneNumberDirectoryMap')

const result = phonenumberDir(["John:335-099-245", "Joe:112-113-114"]);


console.log(result);
console.log(result.get('Joe'));