"use strict";

function Car(name, color, numOfDoors, engine, hasBurnet) {
  this.name = name;
  this.color = color;
  this.doors = numOfDoors;
  this.engine = engine;
  this.hasBurnet = hasBurnet;
  this.isDriving = false;

  this.drive = function (passengers) {
    console.log(`${this.name}: Driving with ${passengers}`);
    this.isDriving = true;
  };

  this.stop = function () {
    console.log(`${this.name} stopping car`);
    this.isDriving = false;
  };
}
// const toyota = new Object()
// toyota.drive = function (passengers) {
//   console.log(`${this.name}: Driving with ${passengers}`);
//   this.isDriving = true;
// };

// toyota.stop = function () {
//   console.log(`${this.name} stopping car`);
//   this.isDriving = false;
// };
// Dot notation
// console.log(toyota.engine);

//Square bracket notation
// let key = "name";
// console.log(toyota[key]);

// toyota["name"] = "Lexus";
// toyota.name = "Lexus";

// delete toyota.engine;
// console.log(toyota);

const toyota = new Car("Toyota", "Blue", 4, "V8", true);
const honda = new Car("Honda", "Green", 2, "V8", true);
const lexus = new Car("Lexus", "Red", 5, "V12", false);
lexus.drive("Gideon and Jonathan");
lexus.stop();

toyota.drive("Akim and Anne");
toyota.stop();
