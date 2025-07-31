//! ForEach()
// let numbers = [1, 2, 3, 4];

// const newNumbers = numbers.forEach(function (num) {
//   const doubled = num * 2;
//   //   console.log(doubled);
// });

//Array of objects
// const products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 10 },
//   { name: "Tablet", stock: 3 },
// ];

// products.forEach((individualProduct) => {
//   console.log(
//     `Product:${individualProduct.name}, stock: ${individualProduct.stock}`
//   );
// });

//! map()
//creates a new array
//transform the elements

// let numbers = [1, 2, 3, 4];

// const doubledArray = numbers.map(function (num) {
//   return num * 2;
// });

// const products = [
//   { name: "Laptop", stock: 5, price: 1000 },
//   { name: "Phone", stock: 10, price: 500 },
//   { name: "Tablet", stock: 3, price: 300 },
// ];
//Apply 10%  discount on the price

// const discountedPrices = products.map((product) => {
//   return {
//     name: product.name,
//     stock: product.stock,
//     price: product.price * 0.9,
//   };
// });
// console.log(discountedPrices);

//! filter()
let numbers = [1, 2, 3, 4, 1, 2, 3, 10];
//filter all numbers === 1

const filteredNumbers = numbers.filter(function (num) {
  return num === 1; //logic/criteria will be
});

//filter all numbers that are even
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

const products = [
  { name: "Laptop", stock: 5, price: 1000, isOutOfStock: false },
  { name: "Phone", stock: 10, price: 500, isOutOfStock: true },
  { name: "Tablet", stock: 3, price: 300, isOutOfStock: true },
];

// const outOfStocks = products.filter(function (product) {
//   return product.isOutOfStock === true;
// });

//inStock

const inStocks = products.filter(function (product) {
  return product.stock >= 5;
});

//!====reduce()====

const numbers1 = [1, 2, 3, 4, 5, 6];

const totalSum = numbers1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10);

//calculate total inventory value

const products2 = [
  { name: "Laptop", stock: 5, price: 1000, isOutOfStock: false },
  { name: "Phone", stock: 10, price: 500, isOutOfStock: true },
  { name: "Tablet", stock: 3, price: 300, isOutOfStock: true },
];

const totalValue = products2.reduce(function (acc, product) {
  return acc + product.stock * product.price;
}, 0);

//!====find()=====
const numbers2 = [1, 2, 3, 4, 5, 6];
const foundNumber = numbers2.find(function (num) {
  return num > 3;
});

console.log(foundNumber);
