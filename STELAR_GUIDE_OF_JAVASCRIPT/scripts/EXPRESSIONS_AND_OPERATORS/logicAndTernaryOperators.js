/* 
    Logic operators: &&, ||, !
*/
let bread = true
let cheese = true
let cheeseBread = false
console.log(
    !bread && cheese,
    bread && cheese,
    !bread || cheese,
    (bread && cheese) || cheeseBread,
    (bread && !cheese) || cheeseBread,
    (bread && !cheese) && cheeseBread,
    !bread && cheeseBread
)
console.log('======================')

/* 
    Ternary operator examples
*/
let dayHour = 23
const IS_A_VALID_TIME = (hour) => { return (hour <= 24 && hour >=0) } 
console.log(IS_A_VALID_TIME(dayHour) ? "Valid hour" : "Invalid hour")
dayHour **= 2
console.log(IS_A_VALID_TIME(dayHour) ? "Valid hour" : "Invalid hour")

let someValue
console.log(!!someValue ? true : false)
someValue = "fffff"
console.log(!!someValue ? true : false)
console.log('======================')
