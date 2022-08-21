// Function statement
function motivationalPhrases() {
    console.log('Study is cool')
    console.log('Patience and persistence is all')
    console.log('Review is the mother of learning')
    console.log("=================================")
}

// Evoke the function
motivationalPhrases()
motivationalPhrases()
motivationalPhrases()

// Using a function expression to create a function with 2 arguments
const sum = function(a, b) {
    console.log(typeof a, " + ", typeof b, " = ", a + b)
}
sum(9, 90)
sum(99, 1)
sum(4.75, 3.141618)
sum(5757575, "hey hey hey")
sum(5)
console.log("=================================")