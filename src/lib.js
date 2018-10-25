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
    return {
      old,
      delta, 
      new :(old = old + delta)
    };
  }
}

const makeFiboGenerator = function(firstElement,secondElement) {
  if(!firstElement) {
    firstElement = 0;
    secondElement = 1;
  }
  if(!secondElement) {
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

const concatElements = function(arrayToConcatWith,currentElement) {
  return arrayToConcatWith.concat(currentElement);
}

const makeCycler = function(array) { 
  let index = 0;
  let newArray = array.slice(0,array.length);
  return function() {
    if(index == newArray.length){
      index = 0;
    }
    return newArray[index++];
  }
}

const curry = function(func,number) {
  return function(number1,number2) {
    return func(number,number1,number2)
  }
}

const compose = function(func1,func2) {
  return function(argument1,argument2) {
    if(argument2) {
      return func2(func1(argument1),func1(argument2));
    }
    return func1(func2(argument1));
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
