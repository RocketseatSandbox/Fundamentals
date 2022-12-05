/*
    Prototype is a native inherit chain of the language. 
    Let's use above a __proto__ method:
*/
console.log(
    "RaymundoAnthony".__proto__, 
    "RaymundoAnthony".toUpperCase(),
    "RaymundoAnthony".toLowerCase()
)
console.log(2.8.__proto__, 2.8.toFixed(0), 2.3.toFixed(0))
console.log(
    ["a", "g", "j", "x"].__proto__, 
    ["a", "g", "j", "x"].sort(function(a, b) {if(a > b) return -1})
)
console.log("============================")

/* 
    Typecasting vs Type coersion
*/
const NEGATIVE_NUM = "-1"
console.log(
    Number(NEGATIVE_NUM), 
    +(NEGATIVE_NUM), 
    Number(NEGATIVE_NUM).toString(),
    String(Number(NEGATIVE_NUM))
)
console.log("============================")

/* 
    Counting chars and digits, more about decimal number and lowercase x uppercase
*/
let word = "endocrinologist"
let bigNumber = 12144566
let bigDecimalNumber = 12244.24541
console.log(
    word.length, 
    String(bigNumber).length, 
    bigDecimalNumber.toFixed(2).replace(".", ",").replace("2", "0")
)