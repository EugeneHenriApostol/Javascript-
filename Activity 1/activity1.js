/**🛠️ Activity 1: Age-based Ticket Pricing
Description:
Create a program that calculates the ticket price for a movie theater based on the customer's age.

If the customer is below 5 years old, the ticket is free.

If the customer is between 5 and 12 years old, the ticket costs $5.

If the customer is between 13 and 59 years old, the ticket costs $10.

If the customer is 60 years or older, the ticket costs $7.

Print the final price.

✅ Input: A variable age representing the customer’s age.
✅ Output: Print the ticket price. */

let customer_age = Number(prompt("Please Enter your age: "));
if (customer_age < 5) {
    console.log("The ticket is free.");
} else if (customer_age >= 5 && customer_age <= 12) {
    console.log("The ticket costs $5.");
} else if (customer_age >= 13 && customer_age <= 59) {
    console.log("The ticket costs $10.");
} else {
    console.log("The ticket costs $7.");
}