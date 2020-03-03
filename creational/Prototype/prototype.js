const UserObject = function(name, age) {
  this.name = name;
  this.age = age;

  this.toString = function toString() {
    return this.name + ": " + age;
  };
};

const Animal = function(name) {
  this.name = name;
};

Animal.prototype.toString = function() {
  return "Animal : " + this.name;
};

let user = new UserObject("Sundar", 50);
let userB = new UserObject("Lamar", 40);
let cat = new Animal("cat");
let dog = new Animal("dog");

console.log(cat.toString());
console.log(dog.toString());

Animal.prototype.toString = function() {
  return "I am an animal of type : " + this.name;
};
//this won't change on the previously created userObjects, unless you change on every instance
UserObject.toString = function() {
  return "Humaasssss " + this.name;
};

console.log(cat.toString());
console.log(dog.toString());
let anotherHuman = new UserObject("bill", 80);
anotherHuman.toString = function() {
  return "I am the other human : " + this.name;
};

console.log(user.toString());
console.log(userB.toString());
console.log(anotherHuman.toString());

//So prototypes are better,
