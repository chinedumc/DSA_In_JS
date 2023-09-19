const removeDuplicates = (arr) => {
  uniqueArray = []
  for (let i = 0; i < arr.length; i++) {
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i])
    }
    
  }
  return uniqueArray
  // console.log(uniqueArray);
}

// removeDuplicates([1, 1,3,4,'hi', 'who','4','hi'])
module.exports = removeDuplicates