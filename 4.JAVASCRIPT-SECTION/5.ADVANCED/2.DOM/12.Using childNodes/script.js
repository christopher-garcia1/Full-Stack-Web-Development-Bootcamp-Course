//Step 1: Select the outer div using its ID
const outerDivEl = document.getElementById('outerDiv')

//Step 2: Navigate to the first child, which is a text node
const firstChild = outerDivEl.childNodes[0]

// Step 3: Navigate to the second child, which is the innerDiv
const secondChild = outerDivEl.childNodes[1]


//Step 4: select the first child of the inner div 
const firstInnerDivChild = secondChild.childNodes[0]


//Step 4: select the second child of the inner div
const secondInnerDiv = secondChild.childNodes[1]

console.log(outerDivEl);
console.log(firstChild);
console.log(secondChild);
console.log(firstInnerDivChild); 
console.log(secondInnerDiv);


