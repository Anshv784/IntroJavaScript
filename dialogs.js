// Display an alert dialog
alert("This is an alert dialog!");

// Display a confirmation dialog
let userConfirmed = confirm("Do you want to proceed?");
if (userConfirmed) {
    console.log("User chose to proceed.");
} else {
    console.log("User chose to cancel.");
}

// Display a prompt dialog
let userName = prompt("Please enter your name:", "Harry Potter");
if (userName !== null) {
    console.log("Hello, " + userName + "!");
} else {
    console.log("User cancelled the prompt.");
}