const Person = require("./Person");

class Instructor extends Person {
  constructor(type, name, role, earnings) {
    super(name);
    this.type = type;
    this.role = role;
    this.earnings = earnings;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Instructor;
