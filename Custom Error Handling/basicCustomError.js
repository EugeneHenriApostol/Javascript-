/**✅ Exercise 1: Basic Custom Error
👉 Goal: Create a NegativeNumberError and throw it if the input is negative.

Instructions:

Create a class NegativeNumberError that extends Error.

In a function checkPositiveNumber(num), throw the custom error if the number is negative.

Use try...catch to catch and print the error message.

Print Check complete in the finally block. 
*/

// custom error object
class NegativeErrorNumber extends Error {
    constructor(message) {
        super(message); // call the parent error constructor with the message
        this.name = "NegativeErrorNumber";
    }
}

function checkPositiveNumber(num) {
    if (num === 0) {
        console.log("Number is zero");
    }
    if (num > 0) {
        console.log(`The number ${num} is positive`);
    }
    if (num < 0) {
        throw new NegativeErrorNumber(`The number ${num} is negative.`);
    }
}

function runValidation(num) {
    try {
        checkPositiveNumber(num);
    } catch (error) {
        if (error instanceof NegativeErrorNumber) {
            console.log(`Error: ${error.message}`)
        } else {
            console.log("An unexpected error occurred.");
        }
    } finally {
        console.log("Check complete.");
    }
}

// test cases
runValidation(0);
runValidation(2);
runValidation(-3);