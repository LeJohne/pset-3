const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.\n")
const amount1 = Number(readlineSync.question(""));
const amount2 = Number(readlineSync.question(""));
const amount3 = Number(readlineSync.question(""));

let diff1 = amount1 - amount2;
let diff2 = amount2 - amount3;

if (amount1 < Number.MIN_SAFE_INTEGER || amount1 > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid")
} else if (amount2 < Number.MIN_SAFE_INTEGER || amount2 > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid")
} else if (amount3 < Number.MIN_SAFE_INTEGER || amount3 > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid")
} else if(amount3 > amount2 && diff2 == diff1){
  console.log("Stictly increasing.")
} else if(amount3 > amount2 && amount2 > amount1 == diff1){
  console.log("Increasing.")
} else if(amount3 == amount2 && amount2 == amount1 == diff1){
  console.log("Equal.")
} else if(amount3 < amount2 && amount2 < amount1 == diff1){
  console.log("Decreasing.")
} else if(amount3 < amount2 && diff1 == diff2){
  console.log("Strictly Decreasing.")
}
