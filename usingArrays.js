// Creating an array
let fruits = ["Apple", "Banana", "Mango"];

// Accessing elements in an array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango

// Adding elements to an array
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Removing the last element from an array
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// Removing the first element from an array
fruits.shift();
console.log(fruits); // Output: ["Banana", "Mango"]

// Adding an element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Banana", "Mango"]

// Finding the index of an element in an array
let index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Removing an element by index
fruits.splice(index, 1);
console.log(fruits); // Output: ["Strawberry", "Mango"]

// Iterating over an array
fruits.forEach(function(item, index) {
    console.log(index, item);
});
// Output:
// 0 Strawberry
// 1 Mango