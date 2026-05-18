// function name() {
//   body
// }
// Function declaration

// function add() {
//   console.log(1 + 2);
// }

// let user = "Gideon";

// function sayHi() {
//   let message = "Hi My name is Jonathan";
//   console.log(message);
// }
// function sayHi(user = "Anonymous" /* Parameter */, age = 0) {
//   //   let message = "Hi My name is " + user; // String Concatenation
//   let message = `Hi my name is ${user}. I am ${age} years old`;
//   console.log(message);
// }

// Arrow functions
let sayHi = (user = "Anonymous", age = 0) => {
  let message = `Hi my name is ${user}. I am ${age} years old`;
  console.log(message);
};

// Calling or invoking the functions
// add();
// add();
// add();
// add();
// add();
// sayHi();
// let jonathan = "Jonathan";
// console.log(jonathan);
// console.log("1" + 1);
// console.log(1 + 1);

// sayHi("Praise" /*Argument*/, 23);
// sayHi("Jonathan", 21);
// sayHi("Joseph", 22);
// sayHi();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function pow(a, b) {
  return a ** b;
}

function remainder(a, b) {
  //  % - Modulo
  return a % b;
}

function roundUp(a) {
  //  Built-In Objects
  return Math.ceil(a);
}
function roundDown(a) {
  //  Built-In Objects
  return Math.floor(a);
}
function round(a) {
  //  Built-In Objects
  return Math.round(a);
}

function random(a) {
  return roundDown(Math.random() * a);
}
let sum2 = add(1, 4);

let remainder3 = remainder(3, 2);
// console.log(random(3));

function calculateTip(bill, tipPercent) {
  return bill * (tipPercent / 100);
}

let totalTip = calculateTip(200, 5);
console.log(totalTip);
/**
 *
 * 1) Calculate Tip based on percentage (5%, 15% etc) calculateTip
 * 2) Split The bill per person splitBill
 */
