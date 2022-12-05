// 1) Declare a variable called "weight"
let weight

// 2) Whats the type of the variable above?
console.log(typeof weight)

/*  
   3) Declare and attribute a value for the following data:
    * name: String
    * age: Number(integer)
    * stars: Number(float)
    * isSubscribed: Boolean
*/
let name, age, stars, isSubscribed
name = "Guilherme"
age = 27
stars = 4.7
isSubscribed = true

// 4) Whats the kind of data for the "student" variable?
let student = {}
console.log(typeof student)

/* 
   4.1) Attribute to the "student" the same properties used in exercise three
   4.2) Show on the console the message: <name> with age <age> has <weight> kg.
        - Replace the variables on <>  to the content of vars on exercise three
*/
student = {
    name,
    age,
    stars,
    isSubscribed,
    weight: 90
}
const STUDENT_INFO = `${student.name} with age ${student.age} has ${student.weight} kg.`
console.log(STUDENT_INFO)

/* 
    5) Declare a variable kind Array data with the name "students" and attribute to him 
    a empty value
*/
let students = []

/* 
    6) Revaluate the variable above, you have to insert the object inside, don't copy and paste
*/
students = [student]

/* 
    7) Put on the console the position "0" of the students array
*/
console.log(students[0])

/* 
    8) Create a new student and put these content into the position "1" of students array
*/
const MAG = {
    name: "Magguie",
    age: 18,
    stars: 5.0,
    isSubscribed: false,
    weight: 57.2
}
students[1] = MAG

/* 
    9) Without run the code below, whats the response and why?
    console.log(a)
    var a = 1
*/
// The response will be "undefined", because the hoisting phenomenal