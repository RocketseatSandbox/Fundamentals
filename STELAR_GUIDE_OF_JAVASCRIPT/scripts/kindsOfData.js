/* 
    Examples of string using: "", '', ``
*/
console.log("Mônica Caroline Carvalho aka 'TheMonicaDev'")
console.log('""__o_o__""');
console.log('Guilherme Silva Borges aka "GuilhermeBorgsDdev"')
console.log(`
    =====>>
     O   
    -0- ${'S' + 2}
    _|_
    <<=====
`)
console.log(`
    \n
    =============================
    \n
`)
/* 
    Examples using type Number: 22, 12.5, NaN, Infinity, expressions and some Math methods
*/
console.log("All of these are Numbers: ", 22, -22, 25/2, 3/'a', '3'/'a', 100/0)
console.log('All these expressions returns a type Number too: ', 
(3 * 3), (2 - 1/2), (3**4), Math.pow(3, 4), Math.sqrt(25), Math.cbrt(27))
console.log(`
    \n
    =============================
    \n
`)
/* 
    Examples of booleans:
*/
console.log("Boolean expressions: ", 1 == "1", 1 === "1", 1 !== '1', 1 != '1', -1 > 0, 0 >= -1)
console.log(`
    \n
    =============================
    \n
`)
/* 
    Differences between undefined and null:
*/
console.log("Using null and undefined on boolean expressions: ", 
!!null, !!undefined, !!null === !!undefined, null === undefined)
console.log(`
    \n
    =============================
    \n
`)
/* 
    Practicing JS object:
*/
const phoneObj = {
    name: 'Zenphone 5', 
    yearOfFabrication: 2015, 
    hasOneOwner: false,
    allPhoneInfo: () => { 
        return "Phone: " + phoneObj.name + " -- Year: " + phoneObj.yearOfFabrication + 
        " -- Has just one owner: " + phoneObj.hasOneOwner
    }
}
console.log(phoneObj.allPhoneInfo())
console.log(`
    \n
    =============================
    \n
`)
/* 
   Using the JS array structure:
*/
