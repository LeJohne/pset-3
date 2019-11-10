const readlineSync = require("readline-sync");

const cardEntered = String(readlineSync.question("\nEnter a playing card: "));

let ace = "\nAce"
let king = "\nKing"
let queen = "\nQueen"
let jack = "\nJack"
let ten = "\nTen"
let nine = "\nNine"
let eight = "\nEight"
let seven = "\nSeven"
let six = "\nSix"
let five = "\nFive"
let four = "\nFour"
let three = "\nThree"
let two = "\nTwo"

let spades = " of Spades.\n"
let hearts = " of Hearts.\n"
let diamonds = " of Diamonds.\n"
let clubs = " of Clubs.\n"

if (cardEntered == "AS" || cardEntered == "as"){
    console.log(ace.concat(spades) + "")
} else if (cardEntered == "AH" || cardEntered == "ah"){
    console.log(ace.concat(hearts) + "")
} else if (cardEntered == "AD" || cardEntered == "ad"){
    console.log(ace.concat(diamonds) + "")
} else if (cardEntered == "AC" || cardEntered == "ac"){
    console.log(ace.concat(clubs) + "")
} else if (cardEntered == "KS" || cardEntered == "ks"){
    console.log(king.concat(spades) + "")
} else if (cardEntered == "KH" || cardEntered == "kh"){
    console.log(king.concat(hearts) + "")
} else if (cardEntered == "KD" || cardEntered == "kd"){
    console.log(king.concat(diamonds) + "")
} else if (cardEntered == "KC" || cardEntered == "kc"){
    console.log(king.concat(clubs) + "")
} else if (cardEntered == "QS" || cardEntered == "qs"){
    console.log(queen.concat(spades) + "")
} else if (cardEntered == "QH" || cardEntered == "qh"){
    console.log(queen.concat(hearts) + "")
} else if (cardEntered == "QD" || cardEntered == "qd"){
    console.log(queen.concat(diamonds) + "")
} else if (cardEntered == "QC" || cardEntered == "qc"){
    console.log(queen.concat(clubs) + "")
} else if (cardEntered == "JS" || cardEntered == "js"){
    console.log(jack.concat(spades) + "")
} else if (cardEntered == "JH" || cardEntered == "jh"){
    console.log(jack.concat(hearts) + "")
} else if (cardEntered == "JD" || cardEntered == "jd"){
    console.log(jack.concat(diamonds) + "")
} else if (cardEntered == "JC" || cardEntered == "jc"){
    console.log(jack.concat(clubs) + "")
} else if (cardEntered == "TS" || cardEntered == "ts"){
    console.log(ten.concat(spades) + "")
} else if (cardEntered == "TH" || cardEntered == "th"){
    console.log(ten.concat(hearts) + "")
} else if (cardEntered == "TD" || cardEntered == "td"){
    console.log(ten.concat(diamonds) + "")
} else if (cardEntered == "TC" || cardEntered == "tc"){
    console.log(ten.concat(clubs) + "")
} else if (cardEntered == "9S" || cardEntered == "9s"){
    console.log(nine.concat(spades) + "")
} else if (cardEntered == "9H" || cardEntered == "9h"){
    console.log(nine.concat(hearts) + "")
} else if (cardEntered == "9D" || cardEntered == "9d"){
    console.log(nine.concat(diamonds) + "")
} else if (cardEntered == "9C" || cardEntered == "9c"){
    console.log(nine.concat(clubs) + "")
} else if (cardEntered == "8S" || cardEntered == "8s"){
    console.log(eight.concat(spades) + "")
} else if (cardEntered == "8H" || cardEntered == "8h"){
    console.log(eight.concat(hearts) + "")
} else if (cardEntered == "8D" || cardEntered == "8d"){
    console.log(eight.concat(diamonds) + "")
} else if (cardEntered == "8C" || cardEntered == "8c"){
    console.log(eight.concat(clubs) + "")
} else if (cardEntered == "7S" || cardEntered == "7s"){
    console.log(seven.concat(spades) + "")
} else if (cardEntered == "7H" || cardEntered == "7h"){
    console.log(seven.concat(hearts) + "")
} else if (cardEntered == "7D" || cardEntered == "7d"){
    console.log(seven.concat(diamonds) + "")
} else if (cardEntered == "7C" || cardEntered == "7c"){
    console.log(seven.concat(clubs) + "")
} else if (cardEntered == "6S" || cardEntered == "6s"){
    console.log(six.concat(spades) + "")
} else if (cardEntered == "6H" || cardEntered == "6h"){
    console.log(six.concat(hearts) + "")
} else if (cardEntered == "6D" || cardEntered == "6d"){
    console.log(six.concat(diamonds) + "")
} else if (cardEntered == "6C" || cardEntered == "6c"){
    console.log(six.concat(clubs) + "")
} else if (cardEntered == "5S" || cardEntered == "5s"){
    console.log(five.concat(spades) + "")
} else if (cardEntered == "5H" || cardEntered == "5h"){
    console.log(five.concat(hearts) + "")
} else if (cardEntered == "5D" || cardEntered == "5d"){
    console.log(five.concat(diamonds) + "")
} else if (cardEntered == "5C" || cardEntered == "5c"){
    console.log(five.concat(clubs) + "")
} else if (cardEntered == "4S" || cardEntered == "4s"){
    console.log(four.concat(spades) + "")
} else if (cardEntered == "4H" || cardEntered == "4h"){
    console.log(four.concat(hearts) + "")
} else if (cardEntered == "4D" || cardEntered == "4d"){
    console.log(four.concat(diamonds) + "")
} else if (cardEntered == "4C" || cardEntered == "4c"){
    console.log(four.concat(clubs) + "")
} else if (cardEntered == "3S" || cardEntered == "3s"){
    console.log(three.concat(spades) + "")
} else if (cardEntered == "3H" || cardEntered == "3h"){
    console.log(three.concat(hearts) + "")
} else if (cardEntered == "3D" || cardEntered == "3d"){
    console.log(three.concat(diamonds) + "")
} else if (cardEntered == "3C" || cardEntered == "3c"){
    console.log(three.concat(clubs) + "")
} else if (cardEntered == "2S" || cardEntered == "2s"){
    console.log(two.concat(spades) + "")
} else if (cardEntered == "2H" || cardEntered == "2h"){
    console.log(two.concat(hearts) + "")
} else if (cardEntered == "2D" || cardEntered == "2d"){
    console.log(two.concat(diamonds) + "")
} else if (cardEntered == "2C" || cardEntered == "2c"){
    console.log(two.concat(clubs) + "")
} else {
  console.log("\nInvalid\n")
}
