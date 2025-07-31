// arrays
let fruits = ['apple', 'banana', 'mango', 'kiwi']  

// push 

fruits.push('pineapple')

console.log(fruits); 

// How to access array data

let accessApple = fruits[0]
console.log(accessApple);


// pop 

let books = ['The Hobbit', 'Nodejs', 'HTMLl']
// books.pop()
console.log(books);

// shift 

books.shift()
console.log(books);
 

// unshift 

books.unshift('Mern stack')
console.log(books); 

// concat 

const colors1= ['red','blue']
const colors2 = ['yellow', 'orange']

const allColor = colors1.concat(colors2)

console.log(allColor);

// slice

const techCompanies = ['google', 'amazon', 'facebook', 'apple', 'netflix'] 

const selectedCompanies = techCompanies.slice(1, 4)

console.log(selectedCompanies); 

// length 
console.log(techCompanies.length);

