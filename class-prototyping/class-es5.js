function Job(name, industry, field, requiresDegree, salary, canBeDoneByDogs) {
  this.name = name;
  this.industry = industry;
  this.field = field;
  this.requiresDegree = requiresDegree;
  this.salary = salary;
  this.canBeDoneByDogs = canBeDoneByDogs;
}

Job.prototype = {
  getName() {
    return `Name: ${this.name}`;
  },

  getFieldAndIndustry() {
    return `Industry: ${this.industry}, Field: ${this.field}`;
  },

  getDegreeRequirements() {
    return `Degree required: ${this.requiresDegree}`;
  },

  getSalary() {
    return `Salary: ${this.salary}`;
  },

  getCanBeDoneByDogs() {
    return `Can this job be done by dogs? ${this.canBeDoneByDogs}`;
  },
};
