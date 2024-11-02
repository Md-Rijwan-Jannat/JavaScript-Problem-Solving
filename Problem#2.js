// Problem #2: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year.
// Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '2024', author: 'Md Rijwan', year: 1949 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
];

const getBookTitles = (books) => books.map((book) => book.title);

console.log(getBookTitles(books)); // Output: ["To Kill a Mockingbird", "2024", "The Great Gatsby"]
