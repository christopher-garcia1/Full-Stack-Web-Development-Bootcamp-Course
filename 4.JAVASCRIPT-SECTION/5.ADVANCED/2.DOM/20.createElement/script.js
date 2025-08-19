// Function to create a new task
 
const newTask = (task) => {
  // const taskEl = document.createElement('div') 
  // taskEl.setAttribute('class', 'task')
  // let text = document.createTextNode(`${task}`)
  // taskEl.appendChild(text) 
  // document.getElementById('container').appendChild(taskEl)
// ! cleaner way
  const taskEl = document.createElement('div') 
  taskEl.className = 'task'
  taskEl.textContent = task
  document.getElementById('container').appendChild(taskEl)
} 

  // Create a new div element to hold the task

  //add new css to the created element
  //   taskEl.setAttribute("class", "task");

  //Create a text node containing the task text

  //Append the text node to the div element

  //Finally, append the task to the container div
newTask('Game')
newTask('Program')
newTask('Shower')