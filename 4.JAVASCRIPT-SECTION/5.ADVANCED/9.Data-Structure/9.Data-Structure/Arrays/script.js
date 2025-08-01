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

// ! forEach()


// numbers.forEach((num) => {
    //     const doubled = num * 2;
    //     console.log(doubled);
    
    
    // }) 
    
    
    // !Array of objects
    
    // const products = [
    //     { name: 'Laptop', stock: 5 },
    //     {name:'Phone',stock:10},
    //     {name:'Tablet',stock:3},
        
    // ]
    
    // products.forEach((product) => {
    //     console.log(`Product: ${product.name}, stock: ${product.stock}`);
        
    // })
    
    
    // ! map()
    
let numbers = [1, 2, 3, 4]
    
const doubledNumbers=numbers.map((num) => {
    return num *2
    
})

console.log(doubledNumbers);
console.log(numbers);

// apply 10% discount

    const products = [
        { name: 'Laptop', stock: 5, price:1000},
        {name:'Phone',stock:10, price: 500},
        {name:'Tablet',stock:3, price: 300},
        
    ]
const allSale=products.map((product) => {
    return {
        name: product.name,
        stock: product.stock,
        price: product.price * 0.9
     
    }
})
 

console.log(allSale);


// ! reduce 

const numbers1 = [1, 2, 3, 4, 5, 6]

const totalSum =
    numbers1.reduce((accumulator, currentValue) => { 
 
    return accumulator + currentValue
    
    }, 0)

    console.log(totalSum);
     
    const products1 = [
        { name: 'Laptop', stock: 5, price:1000},
        {name:'Phone',stock:10, price: 500},
        {name:'Tablet',stock:3, price: 300},
        
] 
    
// calculate total inventory value

const stockTotalVal=products1.reduce((acc, product) => {
    return acc + product.stock * product.price    
}, 0)

console.log(stockTotalVal);


// ! find() 

const numbers2 = [1, 2, 3, 4, 5, 6] 
const foundNumber=numbers2.find((num) => num > 3); 
console.log(foundNumber);
// returns first instance 
// !filter()
const filteredNumber = numbers2.filter((num) => num > 3)
console.log(filteredNumber);
// returns all instances of that in an array

