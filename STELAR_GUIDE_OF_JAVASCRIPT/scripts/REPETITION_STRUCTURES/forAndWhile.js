/**
 * For - Initialization, stop criteria, increment/decrement expression
 * Inside for you can use break or continue instructions
*/

for (let i = 100; i > 0; i -= 10) {
  if (i < 30) break;
  if (i === 40) continue;
  console.log(i);
}

console.log("======================");

/**
 * While - Require only a condition to stop
 * The while structure is executed at least one time
 * While accepts continue or break too
 * While is used when you don't known how many times the loop must be executed
*/

const LAST_NAME = "Carvalho"
let iterator = 0

while(iterator < LAST_NAME.length) {
    if(
        LAST_NAME[iterator] !== 'a' &&
        LAST_NAME[iterator] !== 'e' &&
        LAST_NAME[iterator] !== 'i' &&
        LAST_NAME[iterator] !== 'o' &&
        LAST_NAME[iterator] !== 'u'
    ) {
        console.log(LAST_NAME[iterator])
    }
    iterator++
}

console.log("======================");

let billion = 1000000000

while(billion > 10) {
    console.log(billion)
    billion /= 10
}

console.log("======================");
