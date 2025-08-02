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
        updateCounter()
    })
    decrease.addEventListener('click', () => {
        counter--
        updateCounter()
    })
    reset.addEventListener('click', () => {
        counter = 0
        updateCounter()
    }) 
    const updateCounter = () => display.textContent = counter

})