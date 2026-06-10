// const fruits = new Array()
// const fruits = [];
const fruits = ["Banana", "Apple", "Pineapple"];

// Square-bracket notation
// console.log(fruits[2]);

// at() method
// console.log(fruits.at(-3));

// fruits[0] = "Mango";
// console.log(fruits);

// delete fruits[1];
// fruits[1] = "Mango";
// console.log(fruits);

// fruits[3] = "Mango";
// fruits[4] = "Grape";
// fruits.push("Mango");
// fruits.push("Grape");

fruits.push("Mango", "Grape");

//  Last Index = fruits.length - 1;

// fruits.pop();
// fruits.pop();
// fruits.pop();
// const lastFruit = fruits.pop();
// console.log(fruits, lastFruit);

// fruits.unshift("Orange", "Guava");
// fruits.shift();
// fruits.shift();
// console.log(fruits);
// fruits = [];

/**
 *
 * for(initial value;condition;increment) {
 *  body
 * }
 *
 */

// i++ increment
// i-- decrement
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// for (let i = fruits.length - 1; i >= 0; i--) {
//   //   console.log(fruits[i]);
//   fruits.pop();
// }
// console.log(fruits);

const numArr = [0, 9, 13, 24, 38, 51];
// const oddNumArr = [];

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] % 2 !== 0) {
//     oddNumArr.push(numArr[i]);
//   }
// }

//  Callback function
const oddNumArr = numArr.filter((num) => num % 2 === 0);

// console.log(oddNumArr);

// for (let i in fruits) {
//   console.log(fruits[i]);
// }

for (let fruit of fruits) {
  console.log(fruit);
}
