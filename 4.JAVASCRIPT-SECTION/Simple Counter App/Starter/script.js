document.addEventListener("DOMContentLoaded", () => { 
    // target btn elements
    const increase = document.getElementById('increase-btn')
    const decrease = document.getElementById('decrease-btn')
    const reset = document.getElementById('reset-btn')
    // target display
    const display = document.getElementById('counter-value')
    //ingate counter
     let counter = 0; 
    // event listeners
    increase.addEventListener('click', () => {
        counter++
        display.textContent = counter
    })
    decrease.addEventListener('click', () => {
        counter--
        display.textContent = counter
    })
    reset.addEventListener('click', () => {
        counter = 0
        display.textContent = 0
    })

})