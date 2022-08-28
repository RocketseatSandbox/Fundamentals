/* 
    Expression 'new':
        - Make an instance of an object
        - Left-hand-side expression
*/
let animal = new String("Pelican")
let childAge = new Number(5)
let christmas = new Date("2022-12-25") 
childAge.secondChildAge = 1
childAge.thirdChildAge = 1
delete childAge.secondChildAge
console.log(
    animal == "Pelican",
    animal === "Pelican",
    animal.valueOf() === "Pelican",
    childAge,
    christmas
)

/* 
    
*/
