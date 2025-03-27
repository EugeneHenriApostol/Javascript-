/**
 * 🔥 Activity 5: Number Converter with Error Handling
Description:
Create a program that:

Takes a number in string format (e.g., "123") as input.

Uses try...catch to:

Attempt to convert the string to a number using Number().

If the conversion fails or the input is invalid (e.g., contains letters), throw an error.

Catch the error and print an appropriate message.

Use finally to print: Conversion attempt complete.

✅ Input: A variable strNum (string).
✅ Output: Print the converted number or an error message.
 */

try {
    const strNum = "123";
    const convert = Number(strNum);

    if (isNaN(convert)) {
        throw new Error ("Invalid input.");
    }

    console.log(`The converted number is ${convert}`);

} catch (error) {
    console.log("Error", error.message);
} finally {
    console.log("Conversion attempt complete.");
}
