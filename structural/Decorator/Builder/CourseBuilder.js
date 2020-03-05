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

class isLatestCourse {
  constructor(basecourse) {
    this.name = basecourse.name + " is a Rececent Course";
  }
}

class BestSeller {
  constructor(basecourse) {
    this.name = basecourse.name + " is BestSelling Course";
  }
}

module.exports = { CourseBuilder, isLatestCourse, BestSeller };
