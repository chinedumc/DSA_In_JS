const arrayIntersection = (arr1, arr2) => {
  let intArr = []

for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i]) && !intArr.includes(arr1[i])) {
    intArr.push(arr1[i])
  }
}
// console.log(intArr);
return intArr
}

// arrayIntersection([1, 2, 3, 7,4, 5,7], [3, 3, 5, 6, 7]);
module.exports = arrayIntersection