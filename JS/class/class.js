"use strict";

class Car {
  constructor(name, color, numOfDoors, engine, hasBurnet) {
    this.name = name;
    this.color = color;
    this.doors = numOfDoors;
    this.engine = engine;
    this.hasBurnet = hasBurnet;
    this.isDriving = false;
  }
  drive(passengers) {
    console.log(`${this.name}: Driving with ${passengers}`);
    this.isDriving = true;
  }
  stop() {
    console.log(`${this.name} stopping car`);
    this.isDriving = false;
  }
}

const toyota = new Car("Toyota", "Blue", 4, "V8", true);
const honda = new Car("Honda", "Green", 2, "V8", true);
const lexus = new Car("Lexus", "Red", 5, "V12", false);

toyota.drive("Gideon and Jonathan");
