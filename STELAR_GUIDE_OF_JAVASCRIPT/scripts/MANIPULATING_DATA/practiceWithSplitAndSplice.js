/* 
    Here we are training the splice() and slice() method with constructor functions
*/

let fruits = ["Orange", "Apple", "Lemon", "Pineapple", "Banana", "Pear"]
let vegetables = ["Lettuce", "Potato", "Tomato", "Manioc", "Corn", "Spinach"]

function Greengrocer(citricFruits, foliage, allFruits) {
    this.citricFruits = citricFruits
    this.foliage = foliage
    this.notification = function() {
        return `
            In our greengrocer we sell these citric fruits: \n
            ${this.citricFruits.join(" ==> ")} \n
            We're also selling the following foliages: \n
            ${this.foliage}
        `
    }
    this.hasBanana = function() {
        return allFruits.includes("Banana") ? "Has banana" : "We don't have bananas"
    }
}

let citricParam = fruits.slice(0, 4)
vegetables.splice(1, 4)

const ITAJUBA_GREENGROCER = new Greengrocer(citricParam, vegetables, fruits)
console.log(ITAJUBA_GREENGROCER.notification())
console.log("===============================")
console.log(ITAJUBA_GREENGROCER.hasBanana())
console.log("===============================")

/* 
    Re-add the vegetables using the splice()
*/
vegetables.splice(1, 0, "Potato", "Tomato", "Manioc", "Corn")
console.log(vegetables)