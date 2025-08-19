//For this example, we will create a simple web page that displays a list of fruits. We will provide a JavaScript function to remove a specific fruit based on its name.

// Function to add a new fruit
const parentList = document.getElementById("fruitList");
const createFruit = (fruit) => {
  //create li delement
  const newfruit = document.createElement("li");
  newfruit.className = "fruit";
  newfruit.textContent = fruit;
  parentList.appendChild(newfruit);
};

//remove fruit function
// ! my version of solution
// const removeFruit = (fruit) => {
//   document.querySelectorAll(".fruit").forEach((f) => {
//     if (f.textContent === fruit) {
//       document.getElementById(
//         "message"
//       ).textContent = `${fruit} was found and removed!`;
//       parentList.removeChild(f);
//     }
//   });
// };

// ? teachers version of the solution  
const removeFruit = (name) => {
  let fruitFound = false; 
  for (const li of parentList.children) {
    if (li.textContent === name) {
      fruitFound = true;
      parentList.removeChild(li)
    }
  } 
  document.getElementById('message').textContent = fruitFound ? `${name} was found and removed!`: `${name} was not found!`
}


//firts: select the parent

//loop throught the fruits to find the fruit

//Update the message based on whether the fruit was found

createFruit("Apple");
createFruit("Kiwi");
createFruit("Watermelon");
createFruit("Banana");
createFruit('Apple')

removeFruit('Apple')
removeFruit('Grapes')
