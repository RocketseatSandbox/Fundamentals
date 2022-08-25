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
console.log("=============================")

/* 
    Elements of array and strings to arrays
*/
const MANIPULATING_STRING = "manipulating"
console.log('["a", 1, false, {}, function(){}].length ==> ', ["a", 1, false, {}, function(){}].length)
console.log(["a", 1, false, {}, function(){ return "Hello!"}][4]())
console.log(MANIPULATING_STRING.split(""), Array.from(MANIPULATING_STRING), MANIPULATING_STRING.split())
console.log("=============================")

/* 
    Manipulating arrays:
        - Add item on the end
        - Add item on the beginning
        - Remove at end
        - Remove on begin
        - Take some elements from the array
        - Remove one or more items in any array position
        - Find the position of an element on array
*/
let techs = ["html", "css", "js"]
techs.push("react")
techs.unshift("node")
console.log(techs)
techs.pop()
techs.shift()
console.log(techs)
console.log(techs.slice(1, 2), techs.slice(1, 3))
techs.splice(0, 1)
techs.splice(techs.length - 1, 1)
console.log(techs, techs[0])
console.log(techs.find(item => item !== undefined))
console.log("=============================")

/* 
    Another slice() examples:
*/
let rgbyc = ["red", "green", "blue", "yellow", "cyan"]
console.log(rgbyc.slice(3), rgbyc.slice(3, 4), rgbyc.slice(3, 3))
