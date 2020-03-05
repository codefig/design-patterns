const {
  CourseBuilder,
  BestSeller,
  isLatestCourse
} = require("./CourseBuilder");

const course_one = new CourseBuilder("Introduction to C").makePaid(100).build();

const latestSelling = new isLatestCourse(course_one);
const bestSelling = new BestSeller(latestSelling);
course_one.toString(latestSelling);
course_one.toString(bestSelling);
