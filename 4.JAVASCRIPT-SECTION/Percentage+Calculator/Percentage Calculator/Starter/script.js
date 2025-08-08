const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");    




calculateBtn.addEventListener('click', () => { 

    if (numberInput.value.length == 0 || percentInput.value.length == 0 || numberInput.value < 0 || percentInput.value < 0) {
        alert('Please fill all inputs with a valid number'); 
        return
    }
    const percent = numberInput.value * (percentInput.value / 100) 
    const final = parseFloat(numberInput.value) + parseFloat(percent)
    
    
  

    percentageResult.innerText = percent.toFixed(2)
    finalResult.innerText = final.toFixed(2)
})