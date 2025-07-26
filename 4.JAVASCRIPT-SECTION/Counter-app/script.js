let counter = 0 

document.querySelector('.btn1').addEventListener('click', () => {
    counter++
    document.querySelector('.counter').textContent = counter 
})

document.querySelector('.btn2').addEventListener('click', () => {
    counter--
    document.querySelector('.counter').textContent = counter 
}) 

document.querySelector('.btn3').addEventListener('click', () => {
    counter += 10;
    document.querySelector('.counter').textContent = counter 
})

document.querySelector('.btn4').addEventListener('click', () => {
    counter = 0
    document.querySelector('.counter').textContent = counter 
})