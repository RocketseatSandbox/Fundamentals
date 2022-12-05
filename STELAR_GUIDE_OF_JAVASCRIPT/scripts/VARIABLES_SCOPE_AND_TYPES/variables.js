/* 
    Manipulating 'vars' like a string and as a number;
    A 'let' was used too, but for receive object properties from variables.
    Dinamic types in JS was explained too on lines 32-35.
*/

var climate = "Hot"
climate += " and Cold"
console.log(climate)

console.log("=============================")

var temperature = 19
temperature +=10
temperature -= 9
temperature *= 2
console.log(temperature)

console.log("=============================")

let itajubaClimateAndTemp = {
    celcius: temperature,
    sensation: climate,
    showItajubaInfo: function() {
        return temperature + " -- " + climate
    }
}
console.log(itajubaClimateAndTemp.showItajubaInfo())

console.log("=============================")

let dinamicType = {}
console.log(typeof dinamicType)
dinamicType = function(){}
console.log(typeof dinamicType, dinamicType())

console.log("=============================")