/* 
    Manipulating strings and arrays:
        - Split a text what contains spaces into a new array, where each text is a position
        inside these array. After, transform the array in a text and instead the spaces put
        the underscore.
*/

const IPSUM_TEXT =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

let textToArray = IPSUM_TEXT.split(" ")
let arrayToTextWithUnderscore = textToArray.join("_")
console.log(arrayToTextWithUnderscore)
console.log("=============================")

/* 
    The string includes() method returns true if find the element or false if the string doesn't contains
*/
const SEARCHED_WORD = "commodo"
const SEARCHED_WORD_V2 = "COMMODO"
console.log(IPSUM_TEXT.includes(SEARCHED_WORD), IPSUM_TEXT.includes(SEARCHED_WORD_V2))
console.log("=============================")

/* 
    Creating and array using the constructor: new Array()
*/
const DECIMALS_CONSTRUCTOR = new Array(1.11, 3.16, 9.99)
const DECIMALS = [1.11, 3.16, 9.99]
console.log(
    DECIMALS_CONSTRUCTOR, 
    DECIMALS, 
    typeof DECIMALS_CONSTRUCTOR,
    typeof DECIMALS,
    DECIMALS_CONSTRUCTOR === DECIMALS
)

/* 
    Elements of array and strings to arrays
*/