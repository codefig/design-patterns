const Person = require("./Person");

class Student extends Person {
  constructor(name, age, school) {
    super(name);
    this.age = age;
    this.school = school;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Student;
