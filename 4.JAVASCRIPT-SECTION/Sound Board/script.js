document.querySelector('.btn1').addEventListener('click', () => {
    const audio = new Audio('music/sound1.mp3');
    audio.play();
}); 

document.querySelector('.btn2').addEventListener('click', () => {
    const audio = new Audio('music/sound2.mp3'); 
    audio.play();
}) 

document.querySelector('.btn3').addEventListener('click', () => {
    const audio = new Audio('music/sound3.mp3'); 
    audio.play();
})