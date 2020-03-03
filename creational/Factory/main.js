const userFactory = require("./userFactory");

const student = userFactory("student", "sundar", 19);
const instructor = userFactory(
  "instructor",
  "Lambda",
  40,
  3000,
  "Software Developer"
);

console.log(instructor);
console.log(student);
