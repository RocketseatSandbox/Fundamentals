/**
 * Convert Celsius to Fahrenheit:
 * Create a function who receives a string in Celsius or 
 * the string can be a Fahrenheit number.
 * ---> The function must return each of them
 *      ---> If the string is Celsius the return must be Fahrenheit
 *      ---> The opposite condition must be returned too 
 * Formulas:
 *      C = (F - 32) / 1.8
 *      F = (C * 1.8) + 32
 * Examples of entries:
 *      32.6C, 199.87F, 0C, -32F
*/

const TEMPERATURES = ["32.6C", "199.87F", "4C", "0F", "-32F"]
const CELSIUS = "celsius"
const FAHRENHEIT = "fahrenheit"

function isCelsiusOrFahrenheit(temperature) {
    if(temperature.includes("F"))
        return FAHRENHEIT
    return CELSIUS
}

const TRANSFORM_FAHRENHEIT_TO_CELSIUS = (fahrenheitTemperature) => {
    return ((fahrenheitTemperature * 1.8) + 32).toFixed(1)
}

const TRANSFORM_CELSIUS_TO_FAHRENHEIT = (celsiusTemperature) => {
    return ((celsiusTemperature - 32) / 1.8).toFixed(1)
}

const REMOVE_LAST_TEMPERATURE_CHAR = (temp) => temp.slice(0, temp.length - 1)

function temperatureConverter(temperaturesArray) {
    let fahrenheit_temperatures = []
    let celsius_temperatures = []
    for(let temperatureItem of temperaturesArray) {
        let temperatureToBeConverted = isCelsiusOrFahrenheit(temperatureItem)
        if(temperatureToBeConverted === FAHRENHEIT) {
            celsius_temperatures.push(TRANSFORM_FAHRENHEIT_TO_CELSIUS(
                Number(REMOVE_LAST_TEMPERATURE_CHAR(temperatureItem))
            ))
        } else {
            fahrenheit_temperatures.push(TRANSFORM_CELSIUS_TO_FAHRENHEIT(
                Number(REMOVE_LAST_TEMPERATURE_CHAR(temperatureItem))
            ))
        }
    }
    return { fahrenheit_temperatures, celsius_temperatures }
}

const DISPLAY_RESULTS_OF_CONVERSION = (objectOfTemperatures) => {
    let defaultMessage = `
        ====================== \n
        The original array of temperatures: ${TEMPERATURES} \n
        Has his °C converted to °F: ${objectOfTemperatures.fahrenheit_temperatures} \n
        And his °F converted to °C: ${objectOfTemperatures.celsius_temperatures} \n
        ======================
    `
    return defaultMessage
}

console.log(DISPLAY_RESULTS_OF_CONVERSION(temperatureConverter(TEMPERATURES)))
