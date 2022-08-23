/* 
    Arrow function
*/
const makeABopSound = () => {
    console.log("BOP BOP BOP BOP")
}
makeABopSound()

/* 
    Callback functions
*/
const printFullName = (firstNameCaller, surnameCaller) => {
    return "My name is: " + firstNameCaller() + " " + surnameCaller()
}
function myFirstName() {
    return "Guilherme"
}
function mySurname() {
    return "Silva Borges"
}
console.log(printFullName(myFirstName, mySurname))

function calcDelta(powB, calcSecondDeltaPart, b, a, c) {
    let x1 = powB(b) - calcSecondDeltaPart(a, c)
    let x2 = powB(b) + calcSecondDeltaPart(a, c)
    return {x1, x2}
}
const powB = (b) => {
    return Math.pow(b, 2)
}
const calcSecondDeltaPart = (a, c) => {
    return 4*a*c
}
let result = calcDelta(powB, calcSecondDeltaPart, 10, 1, 2)
console.log("My math X roots are: ", result.x1, result.x2)

/*  
    Constructor functions
        - Uses the "new" expression, create a new object and accessible by "this" keyword
*/
function BeachData(location, waveType, celsius) {
    this.location = location,
    this.waves = waveType
    this.degrees = celsius
    this.returnBeachInfo = () => { return `${location} beach has ${waveType} was and has a temperature of ${celsius}`}
}
const JURERE = new BeachData("Jurerê Internacional/SC", "low", 32)
const MARESIAS = new BeachData("Maresias/SP", "heavy", 35)
const IPANEMA = new BeachData("Ipanema/RJ", "regular", 42)
console.log(
    "My favorite beaches with full filled information: " +
    "\n" + JURERE.returnBeachInfo() +
    "\n" + MARESIAS.returnBeachInfo() +
    "\n" + IPANEMA.returnBeachInfo()
)
