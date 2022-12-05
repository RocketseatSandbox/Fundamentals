/* 
    About scope:
    - var has a global scope
    - let and const has a block/local scope
    - When you change a var or a let in a scope the JS search for the variable into the global scope(ONLY!).
*/

console.log("'x' exists before the block? ", x)
// console.log("'y' exists before the block? ", y)
// console.log("'z' exists before the block? ", z)

const z = 5
let firstName = "Mônica"

{
    {
        {
            firstName = "Borges"
        }
    }
    var x = 0
    let y = 1
}

console.log("'x' exists after the block? ", x)
//console.log("'y' exists after the block? ", y)
console.log("'z' exists after the block? ", z)
console.log("Whats the printed name? ", firstName)
