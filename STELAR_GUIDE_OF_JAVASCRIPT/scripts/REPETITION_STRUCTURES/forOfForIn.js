/**
 * For of is operated using a variable
 * These variable must be an array like
*/

let name = 'Guilherme'
let names = ['Mônica', 'Caroline', 'Borgisheila']
let numbers = [0, 1, 7, 13, 21, 22, 200]
let isNameHasLetterG = null

for(let char of name) {
    if((char === 'G') || (char === 'g'))
        isNameHasLetterG = true
}
console.log(`${isNameHasLetterG ?  
    (name + ' has the letter G.') : 
    (name + ' does not have letter G.')
}`)
console.log("======================");

let message = "Variable names does not have Ana as a name!"
for(let singleName of names) {
    if(singleName === 'Ana')
        message = "Variable names has Ana as a name!"
}
console.log(message)
console.log("======================");

for(let num of numbers) {
    if(num % 2 == 0)
        numbers = numbers.filter(numberMaintained => numberMaintained !== num)
}
console.log(numbers)
console.log("======================");

/**
 * For in is used on objects
 */

let immobile = {
    name: 'Skyvision Building',
    location: 'Center',
    city: 'São Paulo',
    size: 68,
    value: 500000
}

let immobileInformation = ''

for (const immobileItem in immobile) {
    immobileInformation += immobile[immobileItem] + ' - '
}

console.log(immobileInformation)
console.log("======================");