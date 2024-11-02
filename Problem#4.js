// Problem #4: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year.
// Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2018 },
  { make: 'Honda', model: 'Accord', year: 2015 },
  { make: 'Tesla', model: 'Model S', year: 2020 },
];

const sortByYear = (cars) => cars.sort((a, b) => a.year - b.year);

console.log(sortByYear(cars));
// Output: Array sorted by year: [{ make: "Honda", model: "Accord", year: 2015 }, { make: "Toyota", model: "Camry", year: 2018 }, { make: "Tesla", model: "Model S", year: 2020 }]
