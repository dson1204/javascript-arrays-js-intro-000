var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"

function addElementToBeginningOfArray(chocolate) {
  return chocolateBars.push(chocolate)
}

function destructivelyAddElementToBeginningOfArray(chocolateBars) {
  chocolateBars.unshift(candyString);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString) {
  return [...chocolateBars, candyString];
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString)
  return chocolateBars;
}
function accessElementInArray(array, index){
  return array[index];
}

