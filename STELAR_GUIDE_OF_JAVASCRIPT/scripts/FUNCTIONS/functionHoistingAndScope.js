/*
    Vars in function scope:
        - The "fightFour" variable is global, if you use var, let or const the scope is maintained.
*/
function ufcCards(fightOne, fightTwo, fightThree) {
    let fightFour = "Pudilova X Yanan"
    return fightOne + "\n" + fightTwo + "\n" + fightThree + "\n" + fightFour 
}

let one = "Borrachinha X Rockhold"
let two = "Usman X Edwards"
let three = "Aldo X Dvalishvili"

fightFour = "Pudilova X Rose"
console.log(fightFour)
console.log(ufcCards(one, two, three))

/*
    Function hoisting example:  
        - If you execute a function expression before initialization u'll receive and error on line 23
*/
makeMyWhey("Darkness", 40)
//whatsTheCurrentJS()

function makeMyWhey(wheyBrand, quantity) {
    console.log(`Your ${wheyBrand} within ${quantity}g of whey protein is ready to drink!!!`)
}

const whatsTheCurrentJS = function() {
    console.log("ES6/7")
}