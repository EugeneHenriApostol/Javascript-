/**🛠️ Activity 4: Grade Evaluation with Switch and Try...Catch
Description:
Create a program that:

Takes a numerical grade as input (0-100).

Uses a switch statement to print the letter grade:

90-100: A

80-89: B

70-79: C

60-69: D

Below 60: F

If the input is not a number or is outside the valid range, throw an error and catch it with try...catch, displaying an appropriate message.

Use finally to print: Grade evaluation complete.

✅ Input: A variable grade (number).
✅ Output: Print the letter grade or the error message. */


try {
    let grade = 78;

    if (typeof grade !== "number" || grade < 0 || grade > 100 || isNaN(grade)) {
        throw new Error("Invalid input. Grade must be a number between 0 and 100.");
    }
    
    switch(true) {
        case grade >= 90 && grade <= 100:
            console.log("A");
            break;
        case grade >= 80 && grade <= 89:
            console.log("B");
            break;
        case grade >= 70 && grade <= 79:
            console.log("C");
            break;
        case grade >= 60 && grade <= 69:
            console.log("D");
            break;
        default:
            console.log("F");
    }
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Grade evaluation complete.");
}