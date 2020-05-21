var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolate) {
  return chocolateBars.push(chocolate)
}

function destructivelyAddElementToBeginningOfArray(chocolate) {
  return chocolateBars.unshift(chocolate)
}
