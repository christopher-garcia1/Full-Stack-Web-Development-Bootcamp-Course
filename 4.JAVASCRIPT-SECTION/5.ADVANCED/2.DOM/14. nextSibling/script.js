//Get the container element
const container = document.getElementById('container')

// Get all buttons within the container
const buttons = container.querySelectorAll('button')

// console.log(buttonsEl);

// Loop through each button and change the text of its next sibling
buttons.forEach((button) => {
  // Check if the next sibling is an element node 
  const nextElement = button.nextSibling; 
  if (nextElement && nextElement.nodeType === nextElement.TEXT_NODE) nextElement.textContent = ' changed text'
  
})

  