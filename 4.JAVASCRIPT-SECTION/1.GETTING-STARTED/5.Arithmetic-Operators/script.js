// ! Methods
// * toFixed

let amount = 19.999;

let results = amount.toFixed(2);
console.log(results);

// *isNan

let qty = " 50";
console.log(isNaN(Number(qty)));

// ? checks if number

// * Parsefloat/ParseInt
let convertedNum = parseFloat(qty);
console.log(typeof qty, typeof convertedNum);

// ! Arithmetic operation
// * Addition
let apples = 10;
let oranges = 5;
let totalFruit = apples + oranges;
console.log(totalFruit);

// * Subtraction
let initialBalance = 1000;
let withdrawal = 200;
let totalBalance = initialBalance - withdrawal;
console.log(totalBalance);

// * Multiplication

let costPerItem = 20;
let totalQty = 4;
let totalCost = costPerItem * totalQty;
console.log(totalCost);

// * Division

let totalDistance = 120;
let hours = 2;
let speed = totalDistance / hours;
console.log("Average speed is", speed);

// * Modulus

let totalStudents = 53;
let groupSize = 5;
let remainingStudents = totalStudents % groupSize;
console.log(remainingStudents);

// * Exponentiation
let base = 2;
let power = 3;
let result = base ** power;
console.log(result);

// * Increment
let currentAge = 25;
currentAge++;
console.log(currentAge);

// * Decrement

let countDown = 10;
countDown--;
console.log(countDown);

// ! --Case Study: Budget Management for a Monthly Expense Tracker--
//A user wants to track their monthly expenses and savings using a simple JavaScript program. The user has an income and several expenses like rent, groceries, utilities, and entertainment. The program needs to calculate how much is spent, how much is saved, and what percentage of the income has been spent.
/*
Scenario:
 * Monthly income: $3000
 * Monthly expenses:
 * Rent: $1200
 * Groceries: $600
 * Utilities: $300
 * Entertainment: $200

! Operations to be performed:

1. Calculate the total expenses.
2. Calculate the remaining savings after expenses.
3. Calculate the percentage of income spent.
*/

//Step1: Define the monthly income
const monthlyIncome = 3000;

//Step2: Expenses 
const rent = 1200,
    groceries = 600,
    utilities = 300,
    entertainment = 200;

//Step3: calculate the total expenses

const monthlyExpenses = rent + groceries + utilities + entertainment

//Step 4: Calculate the remaining savings using the Subtraction (-) operator

const remainingSaving = monthlyIncome - monthlyExpenses 
console.log(remainingSaving);


//Step 5: Calculate the percentage of income spent using the Division (/) and Multiplication (*) operators
const percentIncome = ((remainingSaving / monthlyIncome) * 100).toFixed() 
console.log(`Your remaining savings are ${percentIncome}% of your total Income.`); 

const percentageSpent = ((monthlyExpenses / monthlyIncome) * 100).toFixed()

console.log(`You spent ${percentageSpent}% of your income.`);

