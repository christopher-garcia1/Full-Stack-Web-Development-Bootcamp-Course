document.getElementById('outerDiv').addEventListener('click', (event) => {
  alert(`Outer Div has been clicked! Event Phast: ${event.eventPhase}`)
})


document.getElementById('middleDiv').addEventListener('click', (event) => {
  alert(`Middle Div has been clicked! Event Phase: ${event.eventPhase}`)

})

document.getElementById('innerDiv').addEventListener('click', (event) => {
  alert(`innerDiv Div has been clicked! Event Phase: ${event.eventPhase}`)

} )