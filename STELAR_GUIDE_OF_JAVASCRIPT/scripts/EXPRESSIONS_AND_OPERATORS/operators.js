/* 
    IIFE demonstration of ";" use:
        -> If you remove ";" JS understands that you're trying printName()()
*/
function printName() { console.log("John") }
printName();
(function () { console.log("John") })()
console.log("======================")

/* 
    Binary vs unary operators
*/
let number = 5
console.log(
    number += 5,
    number = number + 5,
    number++,
    number,
    ++number,
    number--,
    --number
)
console.log("======================")

/* 
    Ternary operator examples
*/
let empty
console.log(
    ("I am a phrase".includes(" ")) ? "Phrase" : "Word",
    (2 > -2) ? true : false,
    (typeof empty === 'undefined') ? "Undefined" : "Other type"
)
console.log("======================")