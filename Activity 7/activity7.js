/**
 * 🔢 Activity 5: Custom Error Object
Description:
Create a program that:

Defines a custom error object named InvalidInputError using class that extends the Error object.

The constructor should accept a message parameter and call super(message).

Create a function validateAge(age) that:

Throws an InvalidInputError if the age is less than 0 or greater than 120.

Use try...catch to handle the custom error and print the message.

Use finally to print: Age validation complete.

✅ Input: A variable age (number).
✅ Output: Print the validation result or the error message.
 */

// Define a custom error object named InvalidInputError
class InvalidInputError extends Error {
    constructor(message) {
        super(message); // Call the parent Error constructor with the message
        this.name = "InvalidInputError"; // Set the error name
    }
}

// Function to validate age
function validateAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidInputError(`Invalid age: ${age}. Age must be between 0 and 120.`);
    }
    console.log(`Valid age: ${age}`);
}

// Test the function with try...catch and finally
function runValidation(age) {
    try {
        validateAge(age); 
    } catch (error) {
        if (error instanceof InvalidInputError) {
            console.log(`Error: ${error.message}`);
        } else {
            console.log("An unexpected error occurred.");
        }
    } finally {
        console.log("Age validation complete.");
    }
}

console.log(runValidation(25));
console.log(runValidation(-1));
console.log(runValidation(121));