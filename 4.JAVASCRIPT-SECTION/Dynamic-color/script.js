// !
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const title = document.querySelector(".title");
const body = document.querySelector("body");

btn1.addEventListener("click", () => {
    body.style.backgroundColor = 'yellow'
});
 

btn2.addEventListener('click', () => {
    title.style.fontSize = '39px'
}) 

btn3.addEventListener('click', () => {
    body.style.background = ''
    title.style.fontSize = '' 
})