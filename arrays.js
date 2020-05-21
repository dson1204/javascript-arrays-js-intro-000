var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolate) {
  return chocolateBars.push(chocolate)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift(candyString);
  return chocolateBars
}
