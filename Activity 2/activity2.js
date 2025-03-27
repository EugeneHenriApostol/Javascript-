/**🔥 Activity 2: Temperature Converter with Range Check
Description:
Write a program that:

Takes a temperature value in Celsius (stored in a variable celsius).

Converts it to Fahrenheit using the formula:

𝐹 =(𝐶×9/5)+32

Prints whether the weather is cold, warm, or hot based on the Fahrenheit value:

Cold: Below 50°F

Warm: Between 50°F and 85°F (inclusive)

Hot: Above 85°F

✅ Input: A variable celsius representing the temperature in Celsius.
✅ Output: Print the temperature in Fahrenheit and the weather condition. */

let celsius = Number(prompt("Enter temperature: "));
const farenheight = (celsius * 9 / 5) + 32;

console.log(`The temperature in Farenheight is: ${farenheight}°F`);

if (farenheight < 50) {
    console.log("It's cold.");
} else if (farenheight >= 50 && farenheight <= 85) {
    console.log("It's warm.");
} else {
    console.log("It's hot.");
}