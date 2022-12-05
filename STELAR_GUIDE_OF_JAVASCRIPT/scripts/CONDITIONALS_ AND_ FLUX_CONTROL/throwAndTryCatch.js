/**
 *  Throw: Used to dispatch error for example
 *  Try-Catch: Try is the block used when its possible, otherwise we use the Catch block
 */

 function sayMyName(name = '') {
    if(name === '') {
        throw new Error('Name parameter must be passed')
    } 
    console.log("After error...") //Will be never executed because throw works like return
 }

 //sayMyName() --> If uncommented you will receive an application error

 try {
    sayMyName()
 } catch (error) {
    console.log(error.name, " ==> Type of error.name => ", typeof error.name)
    console.log(error.message, " ==> Type of error.message => ", typeof error.message)
 }

 console.log("After try catch blocks...") 

 console.log("======================")