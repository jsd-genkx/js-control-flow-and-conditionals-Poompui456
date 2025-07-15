"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN

if (isNaN (userInput)) {
  console.log("Not a number");
} else {
  console.log("It is a number");
} 
// it's a number.
if (typeof userInput === "number") {
  console.log("It is a number");
} else {
  console.log("Not a number");
}
// not a number.

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number.");
} else {
  console.log("NOT a number.");
}
// NOT a number.

const userInput = "hello";
if (isNaN(userInput)) {
  console.log("Not a number");
} else {
  console.log("It's a number");
}
// not a number.
if (typeof userInput === "number") {
  console.log("It's a number");
} else {
  console.log("Not a number");
}
// Not a number.

