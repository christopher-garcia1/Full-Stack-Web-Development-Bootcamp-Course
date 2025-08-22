const buttonEl = document.getElementById('actionButton')

buttonEl.addEventListener('click', () => {
  console.log('Button was clicked');
  
})


buttonEl.addEventListener('dblclick', () => {
  console.log('Button was double clicked');
  
})

buttonEl.addEventListener('mouseenter', () => {
  console.log('Mouse entered button');
  
})

buttonEl.addEventListener('mouseleave', () => {
  console.log('Mouse leave');
  
})