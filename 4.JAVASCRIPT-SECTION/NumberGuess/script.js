let randomNumber = Math.floor(Math.random() * 10) + 1  
let feedback = document.getElementById('text')
let myGuess;

document.getElementById('guess').addEventListener('click', () => {
    myGuess = parseInt(document.getElementById('numberGuess').value); 
    console.log( randomNumber);
    
    guessCheck()

}) 

const guessCheck = () => {
    while (myGuess !== randomNumber) { 
        if (myGuess > 10 || myGuess < 1) {
            feedback.textContent = 'Number needs to be between 1 and 10'
            return
        }
        if (myGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again'
        } else if (myGuess > randomNumber) {
            feedback.textContent = 'Too high! Try again'
        } 
        return;
    } 
    feedback.textContent = 'You got it right!' 
    randomNumber = Math.floor(Math.random() * 10) + 1  
}