const readlineSync = require("readline-sync");
const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));

const fkelvin = 273.15
const bkelvin = 373.15
const fcelsius = 0
const bcelsius = 100
const ffar = 32
const bfar = 212

if (temp < (Number.MIN_SAFE_INTEGER) || temp > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.")
} else if (temp <= ffar && (scale == "F" || scale == "f")){
      console.log("\nSolid.")
} else if ((temp > ffar && temp < bfar) && (scale == "F" || scale == "f")){
      console.log("\nLiquid.")
} else if (temp >= bfar && (scale == "F" || scale == "f")){
      console.log("\nGas.")
} else if (temp <= fcelsius && (scale == "C" || scale == "c")){
      console.log("\nSolid.")
} else if ((temp > fcelsius && temp < bcelsius) && (scale == "C" || scale == "c")){
      console.log("\nLiquid.")
} else if (temp >= bcelsius && (scale == "C" || scale == "c")){
      console.log("\nGas.")
} else if (temp <= fkelvin && (scale == "K" || scale == "k")){
      console.log("\nSolid.")
} else if ((temp > fkelvim && temp < bkelvin) && (scale == "K" || scale == "k")){
      console.log("\nLiquid.")
} else if (temp >= bkelvin && (scale == "K" || scale == "k")){
      console.log("\nGas.")
} else {
      console.log("\nInvalid.")
