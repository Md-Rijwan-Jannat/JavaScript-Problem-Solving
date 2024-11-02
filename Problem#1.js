// Problem #1: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender.
// Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: 'Md Rijwan', age: 30, gender: 'male' },
  { name: 'Mst Sumaiya', age: 25, gender: 'female' },
  { name: 'Md Munna', age: 40, gender: 'male' },
  { name: 'Mst Sara', age: 35, gender: 'female' },
];

const filterMales = (people) =>
  people
    .filter((person) => person.gender === 'male')
    .map((person) => person.name);

console.log(filterMales(people)); // Output: ["Md Rijwan", "Md Munna"]
