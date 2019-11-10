const readlineSync = require("readline-sync");
const grade = String(readlineSync.question("\nEnter a letter grade: "));

if (grade == "A+" || grade == "A" || grade == "a+" || grade == "a") {
      console.log("\nYour GPA is 4.00.\n")

} else if  (grade == "A-" || grade == "a-") {
      console.log("\nYour GPA is 3.67.")
} else if  (grade == "B+" || grade == "b+") {
      console.log("\nYour GPA is 3.33.")
} else if  (grade == "B"  || grade == "b") {
      console.log("\nYour GPA is 3.00.")
} else if  (grade == "B-" || grade == "b-") {
      console.log("\nYour GPA is 2.67.")
} else if  (grade == "C+" || grade == "c+") {
      console.log("\nYour GPA is 2.33.")
} else if  (grade == "C"  || grade == "c") {
      console.log("\nYour GPA is 2.00.")
} else if  (grade == "C-" || grade == "c-") {
      console.log("\nYour GPA is 1.67.")
} else if  (grade == "D+" || grade == "d+") {
      console.log("\nYour GPA is 1.33.")
} else if  (grade == "D"  || grade == "d") {
      console.log("\nYour GPA is 1.00.")
} else if  (grade == "D-" || grade == "d-") {
      console.log("\nYour GPA is 0.67.")
} else if  (grade == "F"  || grade == "f") {
      console.log("\nYour GPA is 0.00.")
} else {
      console.log("\nInvalid.")
}
