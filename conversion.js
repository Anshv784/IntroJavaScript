// String to Number
function stringToNumber(str) {
    return Number(str);
}

// Number to String
function numberToString(num) {
    return String(num);
}

// Boolean to Number
function booleanToNumber(bool) {
    return Number(bool);
}

// Number to Boolean
function numberToBoolean(num) {
    return Boolean(num);
}

// String to Boolean
function stringToBoolean(str) {
    return str.toLowerCase() === 'true';
}

// Boolean to String
function booleanToString(bool) {
    return String(bool);
}

// Example usage
console.log(stringToNumber("123")); // 123
console.log(numberToString(123)); // "123"
console.log(booleanToNumber(true)); // 1
console.log(numberToBoolean(1)); // true
console.log(stringToBoolean("true")); // true
console.log(booleanToString(false)); // "false"