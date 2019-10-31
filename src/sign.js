const readlineSync = require("readline-sync");
const amount = Number(readlineSync.question("\nEnter a number: "));

if (Number.MIN_SAFE_INTEGER) {
    console.log("\nInvalid.")
} else if (Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.")
} else if (amount > 0) {
  console.log("\nPostive.")
} else if (amount < 0) {
  console.log("\nNegative.")
} else {
  console.log("\nZero.")
}
