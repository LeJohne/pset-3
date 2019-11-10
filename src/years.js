const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));

if (!Number.isInteger(year)) {
   console.log("\nInvalid.\n")
} else if (year < 0 || year > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")
} else if (year % 4 == 0) {
   console.log("\n" + year + " is a leap year.\n")
} else if (year % 4 != 0) {
   console.log("\n" + year + " is not a leap year.\n")
} else {
   console.log("\nInvalid.\n")
}
