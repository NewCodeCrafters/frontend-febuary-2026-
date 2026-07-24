const students = [
  {
    id: 1,
    name: "John",
    age: 19,
    score: 82,
    course: "Frontend",
    paid: true,
  },
  {
    id: 2,
    name: "Sarah",
    age: 21,
    score: 45,
    course: "Backend",
    paid: false,
  },
  {
    id: 3,
    name: "Mike",
    age: 18,
    score: 90,
    course: "Frontend",
    paid: true,
  },
  {
    id: 4,
    name: "David",
    age: 22,
    score: 60,
    course: "UI/UX",
    paid: true,
  },
  {
    id: 5,
    name: "Grace",
    age: 20,
    score: 74,
    course: "Frontend",
    paid: false,
  },
];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

console.log(students[0]);
console.log(students[students.length - 1]);
console.log(students[1].name);
console.log(students[2].score);
console.log(students[3].course);
console.log(students.length);
console.log(students[4].paid);

for (let key in students[0]) {
  //   console.log(students[0].key);
  console.log(students[0][key]);
}

students[0].score = 80;

console.log(students[0]);

const studentNames = students.map((student) => student.name);

const studentAges = students.map((student) => student.age);
const studentScore = students.map((student) => student.score);
const studentCourses = students.map((student) => student.course);
const studentNameScore = students.map((student) => ({
  name: student.name,
  score: student.score,
}));
const studentNameCourse = students.map(
  (student) => `${student.name} - ${student.course}`,
);

const studentReport = students.map(
  (student) => `${student.name} scored ${student.score}`,
);
console.log(studentNames);
console.log(studentAges);
console.log(studentScore);
console.log(studentCourses);

console.log(studentNameScore);
console.log(studentNameCourse);
console.log(studentReport);

const studentsStatus = students.map((student) => ({
  ...student,
  passed: student.score > 60,
}));

const passedStudents = studentsStatus.filter((student) => student.passed);
const failedStudents = studentsStatus.filter((student) => !student.passed);

console.log(passedStudents, failedStudents);

const frontendStudents = students.filter(
  (student) => student.course.toLowerCase() == "frontend",
);
console.log(frontendStudents);

console.log(
  students.filter((student) => student.score >= 50 && student.score <= 80),
);

console.log(
  students.filter(
    (student) => student.course.toLowerCase() == "frontend" && student.paid,
  ),
);

console.log(studentsStatus.find((student) => !student.passed));
console.log(
  studentsStatus.find((student) => student.course.toLowerCase() == "frontend"),
);
console.log(studentsStatus.find((student) => !student.paid));

console.log(
  studentsStatus.find((student) => student.name.toLowerCase() == "mike"),
);

console.log(studentsStatus.find((student) => student.id == 4));
console.log(studentsStatus.find((student) => student.score > 85));
console.log(
  studentsStatus.find((student) => student.course.toLowerCase() == "ui/ux"),
);
console.log(studentsStatus.find((student) => student.name[0] == "S"));
console.log(studentsStatus.find((student) => student.score == 60));
