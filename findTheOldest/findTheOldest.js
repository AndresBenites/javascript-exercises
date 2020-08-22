// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

let findTheOldest = function (peopleObj) {
  ;
  let year = parseInt(new Date().getFullYear());

  for (i = 0; i < Object.keys(peopleObj).length; i++) {
    if (typeof peopleObj[i].yearOfDeath === "undefined") {
      peopleObj[i].age = year - peopleObj[i].yearOfBirth;
      continue;
    }
    peopleObj[i].age = peopleObj[i].yearOfDeath - peopleObj[i].yearOfBirth;
  }
  let returnPerson = Array.from(peopleObj).reduce((a, b) => a.age > b.age ? a : b)
  return returnPerson;
};

// findTheOldest(people);

module.exports = findTheOldest;
