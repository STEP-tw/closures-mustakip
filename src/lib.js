const makeConstant = function(input) {
  return function(anyArgument) {
    return input;
  }
}

const makeCounterFromN = function(number) {
  return function() {
    let returnValue = number;
    number++;
    return returnValue;
  }
}

const makeCounterFromZero = function() {
  let number = 0;
  return function() {
    let returnValue = number;
    number++;
    return returnValue;
  }
}

const isNumber = function(parameter){
  let string = ""+parameter;
  if(string == "undefined") {
    return false;
  }
  return true;
}

const makeDeltaTracker = function(initialValue) {
  let trackedDelta = {old: 0, delta: 0, new: initialValue};
  return function(number) { 
    if(!isNumber(number)){
      number = 0;
    }
    trackedDelta.old = trackedDelta.new;
    trackedDelta.new = trackedDelta.old + number;
    trackedDelta.delta = number;
    return trackedDelta;
  }
}

const makeFiboGenerator = function(firstElement,secondElement) {
  if(!isNumber(firstElement)) {
    firstElement = 0;
    secondElement = 1;
  }
  if(!isNumber(secondElement)) {
    secondElement = firstElement;
    firstElement = 0;
  }
  return function() {
    let fiboNumber = firstElement;
    let sum = firstElement + secondElement;
    firstElement = secondElement;
    secondElement = sum;
    return fiboNumber;
  }
}

const makeCycler = function(array) {
  let index = 0;
  let newArray = array.splice(0,array.length);
  return function() {
    if(index == newArray.length){
      index = 0;
    }
    index++;
    return newArray[index - 1];
  }
}

const curry = function(func,number) {
  return function(number1,number2) {
    return func(number,number1,number2)
  }
}

const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
