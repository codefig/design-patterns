const Student = require("./Student");
const Instructor = require("./Instructor");

const userFactory = (type, name, age, earnings = 0, role = "teacher") => {
  if (type === "instructor") {
    return new Instructor(type, name, role, earnings);
  }

  if (type === "student") {
    return new Student(name, age, (school = "UTDALLAS"));
  }
};

module.exports = userFactory;
