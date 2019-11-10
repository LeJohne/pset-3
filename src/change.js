const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else {
    const quarter = 0.25;
    const d
    ime = 0.10;
    const nickle = 0.05;
    const penny = 0.01

    let qchange = Math.floor(amount/quarter);
    let next = amount % quarter;
    let dchange = Math.floor(next/dime);
    let next1 = next % dime;
    let nchange = Math.floor(next1/nickle);
    let next2 = next1 % nickle;
    let pchange = Math.ceil(next2/penny);

    console.log("\n" + qchange + " quarters, " + dchange + " dimes, " + nchange + " nickels, " + pchange + " pennies.")
}
