/**
 * ⚙️ Activity 6: Basic ATM Simulation
Description:
Create a basic ATM program that:

Uses a switch statement to handle three operations:

"deposit": Add a specified amount to the balance.

"withdraw": Subtract a specified amount from the balance.

"check": Print the current balance.

Throw an error if the operation is invalid (not one of the three options).

Use try...catch to handle the error.

Use finally to print: Transaction complete.

✅ Input:

A variable operation (string) representing the action.

A variable amount (number) for deposit/withdraw.
✅ Output: Print the updated balance or an error message.
 */

try {
    let balance = 1500
    let operation = "check";
    let amount = 10020;
    
    switch(operation) {
        case "deposit":
            if (amount < 0) { throw new Error("Invalid deposit amount."); }
            console.log(`Deposited ${amount} amount. Your current balance is ${balance += amount}.`);
            break;
        case "withdraw":
            if (amount < 0) { throw new Error("Invalid withdraw amount."); }
            if (amount > balance) { throw new Error("Insufficient balance. Cannot withdraw."); }
            console.log(`Withdrawed ${amount} amount. Your current balance is ${balance -= amount}.`);
            break;
        case "check":
            console.log(`Your current balance is ${balance}.`);
            break;
        default:
            console.log("Invalid Operation. Please try again.");
    }
} catch (error) {
    console.log("Error:", error.message)
} finally {
    console.log("Transaction Complete.");
}