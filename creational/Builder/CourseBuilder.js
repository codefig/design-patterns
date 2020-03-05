const Course = require("./Course");

class CourseBuilder {
  constructor(name, sales = 0, price = 0) {
    this.name = name;
    this.sales = sales;
    this.price = price;
  }

  makePaid(price) {
    this.isFree = false;
    this.price = price;
    return this;
  }

  makeCampaign() {
    this.isCampaign = true;
    return this;
  }

  build() {
    return new Course(this);
  }
}

module.exports = CourseBuilder;
