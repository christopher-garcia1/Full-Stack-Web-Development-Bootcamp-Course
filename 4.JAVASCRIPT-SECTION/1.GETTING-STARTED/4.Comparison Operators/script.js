
let numberOfApples = 10;
let numberOfOranges = 20;  

// ! == 

let isEqual = numberOfApples == numberOfOranges 
console.log(isEqual);


/*

! -Case Study: Comparison Operators for a Student Grading System
 A school wants to build a simple grading system to compare students' marks and determine their performance. Each student has marks for different subjects, and the system will compare the student's total marks with the class average to determine whether the student has passed, failed, or performed exceptionally.

! Scenario:

Passing Criteria: The student must score at least 50% of the total possible marks.

Exceptional Performance Criteria: The student must score at least 80% of the total possible marks.

The class average will be compared to the student's marks to check if the student scored above or below the average.

! Requirements:

* Total possible marks for the student: 500
* Marks obtained by the student: 410
* Class average marks: 350

! Operations to be performed:
? 1. Determine if the student has passed (marks ≥ 50% of total possible marks).

? 2. Determine if the student has performed exceptionally (marks ≥ 80% of total possible marks).

? 3.Check if the student's marks are above or below the class average.
*/

const possibleMarks = 500,
    myMarks = 410,
    classAverage = 350;


console.log(possibleMarks,
    myMarks,
    classAverage
);

console.log(myMarks > possibleMarks * 0.5,
    myMarks > possibleMarks * 0.8,
    myMarks > classAverage,
    myMarks < classAverage
);
