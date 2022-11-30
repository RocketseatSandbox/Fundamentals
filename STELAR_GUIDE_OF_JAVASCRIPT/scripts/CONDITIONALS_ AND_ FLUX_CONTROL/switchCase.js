/**
 *  Switch: has a case for expression and a default value
 *  - The conditions are separated by break instruction
 */

let message = ""
const LETTER = 'e'

switch (LETTER) {
  case "a":
    message = "First vocal of the alphabet";
  break;
  case "e":
    message = "Second vocal of the alphabet";
  break;
  case "i":
    message = "Third vocal of the alphabet";
  break;
  case "o":
    message = "Fourth vocal of the alphabet";
  break;
  case "u":
    message = "Fifth vocal of the alphabet";
  break;
  default:
    message = "The letter is not a vocal letter"
}

console.log(message)

console.log("======================");

function calculate(number1, operator, number2) {
    let result = 0;
    switch(operator) {
        case '+':
            result = number1 + number2
        break;
        case '-':
            result = number1 - number2
        break;
        case '*':
            result = number1 * number2
        break;
        case '/':
            result = number1 / number2
        break;
        default: 
            console.log("Operator is not a valid one")
        break;
    }
    return result
}

console.log(calculate(1, '/', 2))

console.log("======================");
