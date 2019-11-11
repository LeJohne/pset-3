const readlineSync = require("readline-sync");
const grade = Number(readlineSync.question("\nEnter a grade: "));

const hiA = 100
const loA = 90
const hiB = 89
const loB = 80
const hiC = 79
const loC = 70
const hiD = 69
const loD = 60
const hiF = 59
const loF = 0
const inval1 = 100
const inval2 = 0

if (grade >= loA && grade <= hiA){
  console.log("\nYou received an A.")
}else if (grade >= loB && grade <= hiB){
  console.log("\nYou received an B.")
}else if (grade >= loC && grade <= hiC){
  console.log("\nYou received an C.")
}else if (grade >= loD && grade <= hiD){
  console.log("\nYou received an D.")
}else if (grade >= loF && grade <= hiF){
  console.log("\nYou received an F.")
}else if (grade > inval1 || grade < inval2){
  console.log("\nInvalid.")
}
