/* 
    Comparison operators compares only values
*/
let one = 1
let two = 2
console.log('two == 1', two == 1)
console.log('one == "1"', one == "1")
console.log('one != two', one != two)
console.log('one != 1', one != 1)
console.log('one != "1"', one != "1")
console.log('======================')

/*
    Identity comparison compares the value and the type
*/
console.log('one === "1"', one === "1")
console.log('one === 1', one === 1)
console.log('two !== "2"', two !== "2")
console.log('two !== 2', two !== 2)
console.log('======================')

/* 
    Bigger than and smaller than, using bigger and equal or smaller and equal too
*/
console.log('one > two', one > two)
console.log('one >= 1', one >= 1)
console.log('two >= 1', two >= 1)
console.log('one < two', one < two)
console.log('one <= two', one <= two)
console.log('one <= 1', one <= 1)
console.log('one <= 0', one <= 0)
console.log('======================')

/*
    Assignment operators: =, +=, -=, *=, /=
*/
let x = 1
console.log(
    x += 2,
    x = x + 2,
    x -= 0,
    x = x - 1,
    x *= 1,
    x = x * 9,
    x = x / 3,
    x /= 3,
    x %= 3,
    x **= 1000
)