/** 
 * Control flow: If else -> Switch -> Throw and Try/Catch
 * In these file we're only seeing if-else with or without blocks
*/

let isCleanCup = false

if(isCleanCup)
    console.log("Serve the coffee")
else
    console.log("Wash the cup")

console.log('======================')

const TEMPERATURE = 36.5
let userTemperatureMessage = null
const HAS_FEVER = TEMPERATURE  >= 37
const HAS_A_NORMAL_TEMPERATURE = TEMPERATURE < 37 && TEMPERATURE >= 36

if(HAS_FEVER) {
    userTemperatureMessage = "Has fever"
} else if(HAS_A_NORMAL_TEMPERATURE) {
    userTemperatureMessage = "Normal temperature"
} else {
    userTemperatureMessage = "Hypothermia"
}

console.log(userTemperatureMessage)

console.log('======================')