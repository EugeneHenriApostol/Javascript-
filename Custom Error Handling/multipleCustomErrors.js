/**
 * ✅ Exercise 2: Multiple Custom Errors
👉 Goal: Create two custom errors for different conditions.

Instructions:

Create two classes:

InvalidEmailError ➝ Thrown if the email doesn’t contain @.

InvalidPasswordError ➝ Thrown if the password is less than 8 characters.

Create a function validateUser(email, password):

Throw InvalidEmailError if the email is invalid.

Throw InvalidPasswordError if the password is too short.

Use try...catch to print specific error messages.
 */

class InvalidEmailError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidEmailError";
    }
}

class InvalidPasswordError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidPasswordError";
    }
}

function checkEmailError(email) {
    if (!email.includes('@')) {
        throw new InvalidEmailError("Email is Invalid");
    } else {
        console.log(`Email ${email} is valid.`);
    }
}

function checkPasswordError(password) {
    if (password.length < 8) {
        throw new InvalidPasswordError("Password must be at least 8 characters long.");
    } else {
        console.log(`Password is valid.`);
    }
}

function runValidateEmail(email) {
    try {
        checkEmailError(email);
    } catch (error) {
        if (error instanceof InvalidEmailError) {
            console.log(`Error: ${error.message}`);
        }
    }
    finally {
        console.log("Checking email is completed.");
    }
}

function runValidatePassword(password) {
    try {
        checkPasswordError(password);
    } catch (error) {
        if (error instanceof InvalidPasswordError) {
            console.log(`Error: ${error.message}`);
        }
    } finally {
        console.log("Checking password is complete");
    }
}

runValidateEmail('test@exmaple.com');
runValidateEmail('testsample.com');
runValidatePassword('asdqwezxc');
runValidatePassword('asdqwe');