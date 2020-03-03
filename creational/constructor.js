var Human = function(name, age) {
  this.name = name;
  this.age = age;

  this.toString = function toString() {
    return this.name + ": " + this.age;
  };
};

class Person {
  constructor(name, age, likes) {
    this.name = name;
    this.age = age;
    this.likes = likes;
  }

  toString() {
    return this.name + ", " + this.likes;
  }
}
let Linus = new Human("Linus", 23);
let bigPerson = new Person("larry", 30, "coding");

console.log(Linus);
console.log(typeof Linus);
console.log(bigPerson);
console.log(typeof bigPerson);
console.log(Linus.toString());
console.log(bigPerson.toString());
