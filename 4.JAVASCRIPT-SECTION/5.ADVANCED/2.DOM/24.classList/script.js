//select the p element
const p = document.getElementById("textElement");

// p.classList.add("bold");
// p.classList.add("italic");
const addClass = () => {
  p.classList.add("highlight", "bold", "italic");
}

//function to add class

//removeClass 
const removeClass = () => {
  p.classList.remove("highlight", "bold", "italic");
}

//toggleClass

const toggleClass = () => {
  p.classList.toggle("highlight")
  p.classList.toggle("bold"); 
  p.classList.toggle("italic");
}

//checkContains

const checkContains = () => {
  alert(
    p.classList.contains('highlight') 
      ? "Contains Highlight"
      : "Does not contain Highlight"
  )
}

//replaceClass 
const replaceClass = () => 
  // ! short circuit evaluation 
    p.classList.contains('italic') && p.classList.replace('italic', 'red-text') 
  
  


//listItem  
const listItem = () => {
  p.classList.item(0) ? alert(`The first class is:  ${p.classList.item(0)}`) : alert('There are no modified classes!')
}


//getValue