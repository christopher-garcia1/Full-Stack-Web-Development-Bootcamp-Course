const parentEl = document.getElementById('parent')
console.log(parentEl.childNodes);
 
parentEl.childNodes.forEach((el) => console.log(el)) 

console.log(parentEl.children);

const convertedHTMLCollection = Array.from(parentEl.children) 

convertedHTMLCollection.forEach((el) => console.log(el.innerHTML) )