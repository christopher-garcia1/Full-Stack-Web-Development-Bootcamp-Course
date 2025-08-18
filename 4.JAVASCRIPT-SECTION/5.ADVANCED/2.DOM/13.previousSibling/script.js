//select buttons
const btnOne = document.getElementById("button1");
const btnTwo = document.getElementById("button2");
//use previousSibling to get the preceeding paragraph element
const paragraphOne = btnOne.previousSibling;
const paragraphTwo = btnTwo.previousSibling;

//change the text content of the preceeding paragraph

if (paragraphOne.nodeType === 3)
  paragraphOne.textContent = "Text has been updated "

if (paragraphTwo.nodeType === 3) paragraphTwo.textContent = 'Text 2 has been updated '

console.log(btnOne);
console.log(btnTwo);
console.log(paragraphOne);
