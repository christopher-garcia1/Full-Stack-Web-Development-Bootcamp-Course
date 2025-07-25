// ! Steps of creating and using a function

// ! Define the function (declared)
// function addNumbers() {
//   // write our code
//   // ! Write our code in the function
//   let a = 10;
//   let b = 20;
//   console.log('This is my function')
//   let results = a + b
//   console.log(results);
  
// }
// // ! CAll use the function (function invocation)
// addNumbers()
// Function parameters
// function addNumbers(a,b) {
//   console.log(a);
//   console.log(b);
  
  
//   // let a = 10;
//   // let b = 20;
//   let results = a + b;
//   console.log(results);
//   alert(results)
  
// }

// addNumbers(10, 20)
// ! Return keyword

// function addNumbers(a,b) {
//   console.log(a);
//   console.log(b);
  
  
//   // let a = 10;
//   // let b = 20;
//   let results = a + b;
//   return results
  
// }

// let ans = addNumbers(10, 20)
// console.log(ans);

// ! Function expression
// const addNumbers = function (a,b) {
//   let results = a + b;
//   return results
  
// }


// let ans = addNumbers(10, 20)
// console.log(ans);


// ! Arrow function

// const addNumbers = (a, b) => {
//   let results = a + b;
//   return results
  
// }
// const addNumbers = (a, b) => a + b;
// let ans = addNumbers(10, 20)
// console.log(ans);

// const otherNumbers = (a, b) => {
//   let ans = a + b
//   return ans
// }

// console.log(otherNumbers(5, 15));

// const againWithNumbers = (a, b) => a + b

// console.log(againWithNumbers(50,60));

// ! anonymous function

  // (function (a, b) {
  //   let results = a + b;
  //   console.log(results);
    
  // })(5, 19); 

  // ((a, b) => { let results = a + b; console.log(results);
  // })(5,5) 
// !simple calc

// const add = (a, b) => a + b; 
// const subtract = (a, b) => a - b; 
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b; 

// console.log(add(10,2));
// console.log(subtract(10, 2)); 
// console.log(multiply(10, 2));
// console.log(divide(10, 2)); 

// ! Character tool
// const length = (a) => a.length;  
// const uppercase = (arg) => arg.toUpperCase()
// const lowercase = (arg) => arg.toLowerCase()
// console.log(length('hello'));
// console.log(uppercase('hello'));
// console.log(lowercase('HKkkh'));

const studentGrading = (points,totalPoints) => {
  let passed = points >= totalPoints * 0.5;
  let exceptionally = points >= totalPoints * 0.8; 
  // * got a little ahead of myself
  // if (passed && exceptionally) {
  //   return 'Congratulations you passed exceptionally '
  // } else if (passed  && !exceptionally) {
  //   return 'Congratulations you passed'
  // } else {
  //   return 'You failed'
  // } 
  return { 
    passed,
    exceptionally
  }
} 



console.log(studentGrading(100, 100));
console.log(studentGrading(75, 100)); 
console.log(studentGrading(9,100));


