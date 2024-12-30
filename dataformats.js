// Working with different data formats in JavaScript

// JSON (JavaScript Object Notation)
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonData); // Convert JSON string to JavaScript object
console.log(obj.name); // Output: John

const jsonString = JSON.stringify(obj); // Convert JavaScript object to JSON string
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}

// Date
const date = new Date();
console.log(date.toISOString()); // Output: Current date in ISO format

// Array
const array = [1, 2, 3, 4, 5];
console.log(array.join(', ')); // Output: 1, 2, 3, 4, 5

// Map
const map = new Map();
map.set('name', 'John');
map.set('age', 30);
console.log(map.get('name')); // Output: John

// Set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
console.log(set.has(3)); // Output: true

// String
const str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// Number
const num = 123.456;
console.log(num.toFixed(2)); // Output: 123.46

// Boolean
const bool = true;
console.log(bool.toString()); // Output: true