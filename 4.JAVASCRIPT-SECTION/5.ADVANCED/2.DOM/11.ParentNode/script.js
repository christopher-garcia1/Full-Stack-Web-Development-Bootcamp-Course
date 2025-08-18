//Step 1: Select a list item using data attribute
const fruitEl = document.querySelector('[data-item=fruit]')

// Step 2: Navigate to the parent <ul> element
const parentEl = fruitEl.parentNode

// Step 3: Navigate to grandparent
const grandparentEl = parentEl.parentNode

// Step 4: Navigate to great- grandparent
const greatGrandParent = grandparentEl.parentNode


console.log(parentEl);
console.log(grandparentEl);
console.log(greatGrandParent);

