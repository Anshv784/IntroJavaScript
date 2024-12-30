// library.js

// Define a simple library
const myLibrary = (function() {
    // Private variables and functions
    let privateVar = 'I am private';

    function privateFunction() {
        console.log(privateVar);
    }

    // Public API
    return {
        publicVar: 'I am public',
        
        publicFunction: function() {
            console.log(this.publicVar);
        },

        callPrivateFunction: function() {
            privateFunction();
        }
    };
})();

// Using the library
console.log(myLibrary.publicVar); // Output: I am public
myLibrary.publicFunction(); // Output: I am public
myLibrary.callPrivateFunction(); // Output: I am private