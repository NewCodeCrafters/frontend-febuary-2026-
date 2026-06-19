"use strict";

class Subject {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

class Student {
  constructor(name, subjects = []) {
    this.name = name;
    this.subjects = subjects;
  }
  //   calculateGrade() {
  //     let totalScore = 0;

  //     for (let i = 0; i < this.subjects.length; i++) {
  //       totalScore += this.subjects[i].score;
  //     }

  //     return totalScore / this.subjects.length;
  //   }
  get grade() {
    let totalScore = 0;

    for (let i = 0; i < this.subjects.length; i++) {
      totalScore += this.subjects[i].score;
    }

    return totalScore / this.subjects.length;
  }
}

const english = new Subject("English", 100);
const math = new Subject("Math", 100);
const government = new Subject("Government", 100);
const biology = new Subject("Biology", 100);

const jonathan = new Student("Jonathan Kelvin", [
  english,
  math,
  government,
  biology,
]);

console.log(jonathan);

jonathan.subjects.push(new Subject("CRS", 50));
console.log(jonathan.grade);
