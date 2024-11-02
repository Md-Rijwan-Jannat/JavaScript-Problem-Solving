// Task: Double Array Elements Using Callback
// Description: Write a function that takes an array and a callback function to double each element in the array.
// The function should return a new array with the doubled values.

function doubleUsingCallback(arr, callback) {
  const newArr = [];
  arr.forEach((num) => {
    newArr.push(callback(num));
  });
  return newArr;
}

function double(num) {
  return num * 2;
}

const arr = [1, 2, 3, 4, 5];
const newArr = doubleUsingCallback(arr, double);
console.log(newArr); // Output: [2, 4, 6, 8, 10]
