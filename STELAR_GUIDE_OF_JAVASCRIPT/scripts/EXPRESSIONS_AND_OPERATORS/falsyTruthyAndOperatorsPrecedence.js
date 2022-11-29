/* 
    Knowing the falsy values
*/
console.log(
    !!false,
    !!0,
    !!-0,
    !!"",
    !!null,
    !!NaN,
    !!undefined
)
console.log('======================')

/* 
    Examples of truthy values
*/
var symbol = Symbol("ee")
console.log(
    !!function(){},
    !!-1,
    !!{},
    !!true,
    !!" ",
    !!symbol,
    !!Infinity
)
console.log('======================')

/* 
    Precedence of operators: 
      1º grouping = ()
      2º negation and increments = ! ++ --
      3º multiplication and division = * / **
      4º addition and subtraction + -
      5º relational = < <= > >=
      6º equity = == != === !==
      7º AND = &&
      8º OR  = ||
      9º conditional = ?:
      10º assignment = (= += -= *=)
*/
let anyValue = null
console.log((-0 && true) || (0 || true))
console.log(3 < 4 ** 2 === 7 || (false ? true : (anyValue = "")) + 2)
console.log('======================')
 