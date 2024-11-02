# JavaScript-Problem-Solving

# JavaScript Problem-Solving Tasks

This project contains solutions to various JavaScript tasks, including array filtering, object manipulation, function composition, sorting, and array reduction. Each task demonstrates different JavaScript techniques and methods.

---

## Task Descriptions and Solutions

### 1. Array Filtering and Mapping

**Description:** Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names.

```javascript
const people = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 40, gender: 'male' },
  { name: 'Sara', age: 35, gender: 'female' },
];

const filterMales = (people) =>
  people
    .filter((person) => person.gender === 'male')
    .map((person) => person.name);

console.log(filterMales(people)); // Output: ["John", "Bob"]
```
