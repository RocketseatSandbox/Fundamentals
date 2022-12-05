/**
 * Create an algorithm who transforms a numerical grade.
 * The transformation consists of numerical to categories like: A,B,C,D or E.
 * starting at 90 = A
 * between 80 and 89 = B
 * between 70 and 79 = C
 * between 60 and 69 = D
 * less than 60 = E
*/

const STUDENT_GRADES = [80, 80.5, 85, 90.5, 20, 99, 60, 40, 71, 70]
let student_grades_converted = []
let student_iterator = 0

const RANGE_A = (studentGrade)  => studentGrade >= 90
const RANGE_B = (studentGrade) => ((studentGrade >= 80) && (studentGrade <= 89))
const RANGE_C = (studentGrade) => ((studentGrade >= 70) && (studentGrade <= 79))
const RANGE_D = (studentGrade) => ((studentGrade >= 60) && (studentGrade <= 69))
const RANGE_E = (studentGrade) => studentGrade < 60

for (let studentIndex = 0; studentIndex < STUDENT_GRADES.length; studentIndex++) {
    if (RANGE_A(STUDENT_GRADES[studentIndex]))
        student_grades_converted.push("A")
    if (RANGE_B(STUDENT_GRADES[studentIndex]))
        student_grades_converted.push("B")
    if (RANGE_C(STUDENT_GRADES[studentIndex]))
        student_grades_converted.push("C")
    if (RANGE_D(STUDENT_GRADES[studentIndex]))
        student_grades_converted.push("D")
    if (RANGE_E(STUDENT_GRADES[studentIndex]))
        student_grades_converted.push("E")
}

for (let studentGrade of STUDENT_GRADES) {
    console.log(`
        Student with grade ${studentGrade} \n 
        Has the concept grade ${student_grades_converted[student_iterator]}
    `)
    console.log("======================");
    student_iterator++;
}