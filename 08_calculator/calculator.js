const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return add(a, -b);
};

const sum = function (numArray) {
  let arraySum = 0;
  for (let i = 0; i < numArray.length; i++) {
    arraySum += numArray[i];
  }
  return arraySum;
};

const multiply = function (numArray) {
  let product = 1;
  for (let i = 0; i < numArray.length; i++) {
    product *= numArray[i];
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
