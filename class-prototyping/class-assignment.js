class Job {
  constructor(name, industry, field, requiresDegree, salary, canBeDoneByDogs) {
    this.name = name;
    this.industry = industry;
    this.field = field;
    this.requiresDegree = requiresDegree;
    this.salary = salary;
    this.canBeDoneByDogs = canBeDoneByDogs;
  }

  getName() {
    return `Name: ${this.name}`;
  }

  getFieldAndIndustry() {
    return `Industry: ${this.industry}, Field: ${this.field}`;
  }

  getDegreeRequirements() {
    return `Degree required: ${this.requiresDegree}`
  }

  getSalary() {
    return `Salary: ${this.salary}`;
  }

  getCanBeDoneByDogs() {
    return `Can this job be done by dogs? ${this.canBeDoneByDogs}`;
  }
}

let dev = new Job ('Web Developer', 'Tech', 'Software Engineering', false, '55k+', false);
let cashier = new Job ('Cashier', 'Retail', 'Grocery', false, '$17/hr', false);
let guard = new Job('Guard', 'Security', 'Personal Security', false, '$18/hr', true);

console.log(cashier.getName());
console.log(cashier.getFieldAndIndustry());

console.log(dev.getDegreeRequirements());
console.log(dev.getCanBeDoneByDogs());

console.log(guard.getFieldAndIndustry());
console.log(guard.getCanBeDoneByDogs());

class Volunteer extends Job {
    constructor (name, industry, organization, isNonprofit){
        super(name, industry);
        this.organization = organization;
        this.isNonprofit = isNonprofit;
    }

    getOrganization() {
        return `Organization: ${this.organization}`;
    }

    getNonprofitStatus() {
        return `Is Non-profit? ${this.isNonprofit}`;
    }
}

let bb = new Volunteer ('Animal Shelter Volunteer', 'Animal Care', 'Humane Society', true);
console.log(bb.getOrganization());
console.log(bb.getNonprofitStatus());