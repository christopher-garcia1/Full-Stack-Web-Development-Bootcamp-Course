const myButton = document.getElementById('addButton')


myButton.addEventListener('click', () => {
    const fistNumber = document.getElementById('num1')
    const secondNumber = document.getElementById('num2')
    const result = document.getElementById('result')
    let total = Number(fistNumber.value) + Number(secondNumber.value);
    console.log(total);

    result.innerHTML = `Your total is ${total}`
})