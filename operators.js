// Arithmetic Operators
let a = 10;
let b = 5;
console.log('Addition:', a + b); // 15
console.log('Subtraction:', a - b); // 5
console.log('Multiplication:', a * b); // 50
console.log('Division:', a / b); // 2
console.log('Modulus:', a % b); // 0
console.log('Exponentiation:', a ** b); // 100000

// Assignment Operators
let c = 20;
c += 10; // c = c + 10
console.log('Addition Assignment:', c); // 30
c -= 5; // c = c - 5
console.log('Subtraction Assignment:', c); // 25
c *= 2; // c = c * 2
console.log('Multiplication Assignment:', c); // 50
c /= 5; // c = c / 5
console.log('Division Assignment:', c); // 10
c %= 3; // c = c % 3
console.log('Modulus Assignment:', c); // 1

// Comparison Operators
console.log('Equal:', a == b); // false
console.log('Not Equal:', a != b); // true
console.log('Strict Equal:', a === b); // false
console.log('Strict Not Equal:', a !== b); // true
console.log('Greater Than:', a > b); // true
console.log('Less Than:', a < b); // false
console.log('Greater Than or Equal:', a >= b); // true
console.log('Less Than or Equal:', a <= b); // false

// Logical Operators
let x = true;
let y = false;
console.log('Logical AND:', x && y); // false
console.log('Logical OR:', x || y); // true
console.log('Logical NOT:', !x); // false

// Bitwise Operators
let d = 5; // 0101 in binary
let e = 3; // 0011 in binary
console.log('Bitwise AND:', d & e); // 1 (0001 in binary)
console.log('Bitwise OR:', d | e); // 7 (0111 in binary)
console.log('Bitwise XOR:', d ^ e); // 6 (0110 in binary)
console.log('Bitwise NOT:', ~d); // -6 (inverts all bits)
console.log('Left Shift:', d << 1); // 10 (1010 in binary)
console.log('Right Shift:', d >> 1); // 2 (0010 in binary)
console.log('Zero-fill Right Shift:', d >>> 1); // 2 (0010 in binary)

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log('Can Vote:', canVote); // Yes