// access submit and input
const inputEl = document.getElementById("username");
const submitEl = document.getElementById("submitButton");

// Create custom event
const usernameSubmitted = new CustomEvent('usernameSubmitted', {
  bubbles: true,
  cancelable: true,
  detail: {text:''},
});

// attach an event listener to handle custom event

document.addEventListener('usernameSubmitted', (event) => {
  console.log(`Username is ${event.detail.text} has been submitted`)
})

submitEl.addEventListener('click', () => {
  usernameSubmitted.detail.text = inputEl.value
  // dispatch 
  document.dispatchEvent(usernameSubmitted)
})