//Declaration
var house

//Assignment
house = "Apartament"

//Data type
console.log(typeof house)

//Grouping declarations
let number, street
number = 32
street = "Downtown Avenue"

//Concatenating and interpolating values: by string and by a template string
const COMPLETE_HOUSE_INFO_STRING = "Kind of immobile: " + house + " - Number: " + number + " - Address: " + street
const COMPLETE_HOUSE_INFO_TEMPLATE = `Kind of immobile: ${house} - Number: ${number} - Address: ${street}`
console.log(COMPLETE_HOUSE_INFO_STRING, "\n", COMPLETE_HOUSE_INFO_TEMPLATE)

//Remembering object and array
const FIGHTER = {
    name: 'Borrachinha',
    age: 31,
    weight: 84.2,
    isChampion: false
}
console.log(`${FIGHTER['name']} has ${FIGHTER.weight}kg.`)
const MARIO_KART_CHARS = [
    {
        name: 'Princess', 
        carColor: 'Pink'
    },
    {
        name: 'Luigi', 
        carColor: 'Green'
    },
    {
        name: 'Yoshi', 
        carColor: 'Green'
    },
    {
        name: 'Donkey Kong', 
        carColor: 'Brown'
    }
]
console.log("I have registered " + MARIO_KART_CHARS.length + " characters, who are: " + MARIO_KART_CHARS[3].name + "," + MARIO_KART_CHARS[1].name + "," + MARIO_KART_CHARS[0].name + "," + MARIO_KART_CHARS[2].name + ".")
console.log(`The respective colors of the characters cars are: ${MARIO_KART_CHARS[3].carColor}, ${MARIO_KART_CHARS[1].carColor}, ${MARIO_KART_CHARS[0].carColor} and ${MARIO_KART_CHARS[2].carColor} `)