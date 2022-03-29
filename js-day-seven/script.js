const storeOwners = [
  { charles: 1 },
  { sally: 1 },
  { cassandra: 1 },
  {
    "Danny Shavez": 1,
    location: "in NM",
  },
];


const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
        totalLocations += 1;
    }
    return totalLocations;
};


let totalLocations = listNumberOfStores();

function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (totalLocations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length - 1; i++) {
    people = Object.keys(storeOwners[i]);
    let person = people.toString();
    console.log("Yes, " + person + " has one");
  }
}

tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
let mister = man[0];

let whereHeLives = storeOwners[3].location;
console.log(
  "Yes, " + mister + " that lives " + whereHeLives + " owns one too."
);
