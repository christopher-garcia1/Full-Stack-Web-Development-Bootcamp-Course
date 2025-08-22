// ! mouse events

document.getElementById('clickButton').addEventListener('click', () => {console.log('button was clicked');
}) 


document.getElementById('doubleClickButton').addEventListener('dblclick',() => {console.log('btn was double clicked');
})

// *key press vents


document.getElementById('hoverDiv').addEventListener('mouseover',() => {console.log('mouse in');
})

document.getElementById('hoverDiv').addEventListener('mouseout',() => {console.log('mouse out');
})

document.getElementById('keyInput').addEventListener('keydown',() => {console.log('keydown was initiateds');
}) 

//? form events

document.getElementById('myForm').addEventListener('submit', () => {
  console.log('submit was initiated');
})