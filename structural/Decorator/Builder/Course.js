class Course {
  constructor(builder) {
    this.name = builder.name;
    this.sales = builder.sales || 0;
    this.isFree = builder.isFree;
    this.price = builder.price || 0;
    this.isCampaign = builder.isCampaign;
  }

  toString(course) {
    return console.log(JSON.stringify(course));
  }
}

module.exports = Course;
