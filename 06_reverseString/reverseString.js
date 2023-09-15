// const reverseString = (str) => {
// const reversedStr = str.split('').reverse().join('')
// return reversedStr
// }

const reverseString = (str) => {
  let reversedStr = ''

  for (let i = str.length -1; i >= 0; i--){
    reversedStr +=  (str[i])

  }
  return reversedStr
}

module.exports = reverseString