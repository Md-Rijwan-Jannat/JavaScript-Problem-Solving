// Problem #6: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumEvenNumbers = (numbers) =>
  numbers.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

console.log(sumEvenNumbers(numbers)); // Output: 20
