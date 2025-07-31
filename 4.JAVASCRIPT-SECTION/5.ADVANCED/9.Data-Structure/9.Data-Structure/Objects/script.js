// creating a person
const person = {
  name: "Alice",
  age: 25,
  city: "New  york",
};

const persond = ["alice", 30.8, "js", false];

console.log(person);

// ! adding properties with dot notation

person.isMarried = false;
person.country = "USA";
console.log(person);
// ! bracket notation

person["hobby"] = "Coding";
person["courses"] = ["js", "node", "python"];
console.log(person);

// !  Accesing object properties
// ?  Dot notation

const personName = person.name;
console.log(personName);
const personAge = person.age;
const personCourses = person.courses;
console.log(person.courses);

// ? Bracket notation
const personHobby = person["hobby"];
console.log(personHobby);

// ! Object.keys

const keys = Object.keys(person);

console.log(keys);

const car = {
  brand: "Honda",
  model: "Accord",
  year: 2025,
};
const values = Object.values(car);
console.log(values);

// ! hasOwnProperties
const hasProperty = car.hasOwnProperty("brand");
console.log(hasProperty);

// ! object.assign
const targetObj = {
  name: "chris",
};

const sourceObj = {
  age: 30,
  country: "usa",
};
const mergedObj = Object.assign(targetObj, sourceObj);
console.log(mergedObj);

// ! Delete operator
delete car.brand;
console.log(car);

// ! Freeze
Object.freeze(car);

car.make = "nissan";

console.log(car);

// ! nesting obj

const user = {
  name: "prince",
  age: 30,
  address: {
    street: "123 main street",
    city: "New York",
    country: {
      name: "Usa",
      code: "US",
    },
  },
};

console.log(user);

// Accesing nested
// dot notation
const userName = user.name
const userAddress = user.address.country.name

// bracket notation
const countryName = user['address']['country']['name']
console.log(countryName);
