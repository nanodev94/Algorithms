import binarySearch from "./binary";

const example1 = [1, 3, 5, 6, 7, 8, 23, 90];
const res1 = binarySearch(example1, 3);
console.log(`Test 1: ${res1 === 3}`); // => 3

const example2 = ["1", "3", "5", "6", "7", "8", "23", "90"];
const res2 = binarySearch(example2, "9");
console.log(`Test 2: ${res2 === undefined}`);
