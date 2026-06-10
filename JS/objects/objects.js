"use strict";

// const toyota = new Object();
const toyota = {
  name: "Toyota",
  color: "Blue",
  doors: 4,
  engine: "V8",
  isDriving: false,
  //   drive() {
  //     console.log("Driving");
  //   },
};

// Dot notation
// console.log(toyota.engine);

//Square bracket notation
// let key = "name";
// console.log(toyota[key]);

// toyota["name"] = "Lexus";
// toyota.name = "Lexus";

// delete toyota.engine;
toyota.hasBurnet = true;
// console.log(toyota);

toyota.drive = function (passengers) {
  console.log(`${this.name}: Driving with ${passengers}`);
  this.isDriving = true;
};

toyota.stop = function () {
  console.log(`${this.name} stopping car`);
  this.isDriving = false;
};

const lexus = { ...toyota };
lexus.name = "Lexus";
lexus.drive("Gideon and Jonathan");
lexus.stop();

console.log(lexus.isDriving);
toyota.drive("Akim and Anne");
toyota.stop();
