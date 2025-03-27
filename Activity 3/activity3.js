/**🔢 Activity 3: Number Classification
Description:
Create a program that:

Takes an integer variable num and checks if it is:

Even and positive

Even and negative

Odd and positive

Odd and negative

Zero

Print the classification based on the conditions.

✅ Input: A variable num representing the number.
✅ Output: Print the classification result. */

let num = Number(prompt("Enter a number: "));

/**
 * approach 1, my first solution
 */
// if (num === 0) {
//     console.log("The number is zero.");
// } else if (num % 2 === 0) {
//     if (num > 0) {
//         console.log(`${num} is even and positive`);
//     } else {
//         console.log(`${num} is even and negative`);
//     }
// } else {
//     if (num > 0) {
//         console.log(`${num} is odd and positive`)
//     } else {
//         console.log(`${num} is odd and negative`)
//     }
// }

/**
 * approach 2, much better and cleaner
 */
if (num === 0) {
    console.log("The number is Zero!");
} else if (num % 2 === 0 && num > 0) {
    console.log(`${num} is even and positive`);
} else if (num % 2 === 0 && num < 0) {
    console.log(`${num} is even and negative`);
} else if (num % 2 !== 0 && num > 0) {
    console.log(`${num} is odd and positive`);
} else {
    console.log(`${num} is odd and negative`);
}