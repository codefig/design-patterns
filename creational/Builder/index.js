const CourseBuilder = require("./CourseBuilder");

const course_one = new CourseBuilder("Introduction to C").makePaid(100).build();
const another = new CourseBuilder("name").build();

console.log(course_one.toString());
console.log(another.toString());
