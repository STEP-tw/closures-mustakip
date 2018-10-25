const makeConstant = function(input) {
  return function() {
    return input;
  }
}

const makeCounterFromN = function(number) {
  return function() {
    return number++;
  }
}

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(initialValue) {
  let old = initialValue;
  return function(delta = 0) { 
    return {old, delta, new :(old = old + delta)};
  }
}

const makeFiboGenerator = function(firstElement = 0,secondElement) {
  if(!secondElement) {
    secondElement = firstElement || 1;
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

const returnElement = function(number) {
  return number;
}

const makeCycler = function(array) { 
  let index = 0;
  let newArray = array.map(returnElement);
  return function() {
    return newArray[((index++) % newArray.length)];
  }
}

const curry = function(func,number) {
  return function(number1,number2) {
    return func(number,number1,number2)
  }
}

const compose = function(func1,func2) {
  return function(argument1,argument2) {
    let output = func2(argument1,argument2);
    return func1(output);
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
