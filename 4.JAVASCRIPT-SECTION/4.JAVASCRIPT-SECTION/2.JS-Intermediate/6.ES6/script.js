// arrow function

// basic syntax
function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 3);

const multiplyA = (a, b) => a * b;
console.log(multiplyA(2, 3));

console.log(result);

// block body
const greet = (name) => {
  return `Hello! ${name}`;
};

console.log(greet("chris"));

const greet2 = (name) => `Hello ${name}`;
console.log(greet2("John"));

const squareNum = (a) => a * a;

console.log(squareNum(9));

// no parameter
const random = () => Math.random() * 10;
console.log(random());

// object literal return

const getUser = () => {
  return {
    name: "Chris",
    age: 39,
  };
};

const getUser2 = () => ({ name: "john", age: 50 });
console.log(getUser());
console.log(getUser2());

// let const

// hoisting
function hoistingIssue() {
  var a = 10;
  console.log(a);
}

hoistingIssue();

// destructuring

// basic syntax

const numbers = [1, 2, 3, 4];

const [first, second, third, fourth] = numbers;

// swap variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

//extract user data

const //user
{name,age,email} = {
  name: "Chris",
  age: 10,
  email: "garcia.christopher1986@gmail.com",
};

console.log(name,age,email);

// Destructure function parameters

const greeting = ({name ,age}) => {
  console.log(`Hello, ${name}! Your age is ${age}!`);
} 


const user1 = {
  name: "Chris",
  age: 10,
  email: "garcia.christopher1986@gmail.com",
} 

greeting(user1)

const {id, info:{name1,age1}} = {
  id: 1, 
  info: {
    name1: 'chris',
    age1:  10
  }
  
}

console.log(id,name1,age1);

const libraryBooks = [
  { title: 'Brave New World', author: 'Aldous Huxley' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];

const extractAuthors = (books) => {
  books.forEach((book) => {
    if (!book.author) { 
      throw new Error(`Invalid book object - 'author' property missing`)
    }
  })    

    return books.map((book) => book.author)
  
}


console.log(extractAuthors(libraryBooks))