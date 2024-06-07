import linearSearch from "./linear";

const example1 = [1, 3, 5, 6, 7, 8, 23, 90];
const res1 = linearSearch(example1, (el) => el === 3);
console.log(`Test 1: ${res1 === 3}`); // => 3

const example2 = ["1", "3", "5", "6", "7", "8", "23", "90"];
const res2 = linearSearch(example2, (el) => el === "9");
console.log(`Test 2: ${res2 === undefined}`);

const example3 = [
  { name: "Fer", surname: "Pu", age: 30 },
  { name: "Cris", surname: "Tor", age: 33 },
];
const res3 = linearSearch(example3, (el) => el.age >= 31);
console.log(
  `Test 3: ${
    res3?.name === "Cris" && res3.surname === "Tor" && res3?.age === 33
  }`
); // => { name: "Cris", surname: "Tor", age: 33 }
